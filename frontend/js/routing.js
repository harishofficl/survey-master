window.addEventListener("load", () => {
  handleRouteChange();
});

// Listen for back/forward navigation
window.addEventListener("popstate", () => {
  handleRouteChange();
});

// Function to navigate to a page by changing the URL and loading the content
export function navigateTo(page, needHistory = true) {
  if (needHistory) {
    history.pushState({ page }, "", `/${page}`);
  } else {
    history.replaceState({ page }, "", `/${page}`);
  }
  handleRouteChange();
}

// Function to handle routing based on URL changes
function handleRouteChange() {
  const path = window.location.pathname.replace("/", "");

  const routes = {
    "": loadLoginPage,
    "login": loadLoginPage,
    "admin": lazyAdminInit,
    "user": lazyUserInit,
    "admin/create-survey": loadCreateSurveyPage,
    "user/survey": () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      const name = params.get("name");
      const email = params.get("email");
      loadSurveyPage(id, name, email);
    },
    "admin/survey": () => {
      const id = new URLSearchParams(window.location.search).get("id");
      loadAdminSurveyPreview(id);
    },
    "admin/response": () => {
      const id = new URLSearchParams(window.location.search).get("id");
      const surveyId = new URLSearchParams(window.location.search).get(
        "surveyId"
      );
      loadAdminResponse(id, surveyId);
    },
    "admin/survey-list": loadSurveyList,
    "admin/response-list": () => {
      const surveyId = new URLSearchParams(window.location.search).get(
        "surveyId"
      );
      loadResponseList(surveyId);
    },
  };

  const routeAction =
    routes[path] || routes[window.location.pathname.replace("/", "")];
  if (routeAction) {
    routeAction();
  } else {
    console.error("No route found for path:", path);
  }
}

// lazy loading sample

function lazyUserInit() {
  if (window.userPageInit) {
    window.userPageInit();
  } else {
    import("./js/user-page/script.js")
      .then((m) => {
        m.userPageInit();
      })
      .catch((err) => console.error("Failed to load user page script:", err));
  }
}
