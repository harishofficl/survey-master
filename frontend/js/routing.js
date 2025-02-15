import structInit from "../utils/struct-init.js";
import login from "../modules/auth/login.js";

// load basic structure of index.html
await structInit();

window.addEventListener("load", () => {
  handleRouteChange();
});

window.addEventListener("popstate", () => {
  handleRouteChange();
});

export function loadPage(page, replace = false) {
  if (replace) {
    history.replaceState({ page }, "", `/${page}`);
  } else {
    history.pushState({ page }, "", `/${page}`);
  }
  handleRouteChange();
}

function handleRouteChange() {
  const path = window.location.pathname.replace("/", "");

  // adminDashboardInit();
  // createSurvey();
  //loadSurveyResponses(surveyId, totalResponseCount);
  //showResponse(responseId);

  // userDashboardInit();
  // fillSurveyUser(surveyCard.id);

  const routes = {
    // auth routes
    "": login,
    login: login,

    // admin routes
    admin: adminDashboardLazy,
    "admin/create-survey": createSurveyLazy,
    "admin/list-responses": () => {
      const surveyId = new URLSearchParams(window.location.search).get(
        "surveyId"
      );
      const totalResponseCount = new URLSearchParams(
        window.location.search
      ).get("responseCount");
      loadSurveyResponsesLazy(surveyId, totalResponseCount);
    },
    "admin/view-response": () => {
      const responseId = new URLSearchParams(window.location.search).get(
        "responseId"
      );
      showResponseLazy(responseId);
    },

    // user routes
    user: userDashboardLazy,
    "user/fill-survey": () => {
      const surveyId = new URLSearchParams(window.location.search).get(
        "surveyId"
      );
      fillSurveyUserLazy(surveyId);
    },
  };

  const routeAction =
    routes[path] || routes[window.location.pathname.replace("/", "")];
  if (routeAction) {
    routeAction();
  } else {
    swal("Error", "Page not found!", "error");
  }
}

// lazy loading modules
// admin dashboard lazy loading
function adminDashboardLazy() {
  if (window.adminDashboardInit) {
    window.adminDashboardInit();
  } else {
    import("../modules/admin/dashboard/dashboard.js")
      .then((m) => {
        m.adminDashboardInit();
      })
      .catch((err) => {
        swal("Error", "Admin Dashboard not found!", "error");
      });
  }
}

// create survey lazy loading
function createSurveyLazy() {
  if (window.createSurveyInit) {
    window.createSurveyInit();
  } else {
    import("../modules/admin/create-survey/create-survey.js")
      .then((m) => {
        m.createSurveyInit();
      })
      .catch((err) => {
        swal("Error", "Create Survey not found!", "error");
      });
  }
}

// list survey responses lazy loading
function loadSurveyResponsesLazy(surveyId, totalResponseCount) {
  if (window.loadSurveyResponses) {
    window.loadSurveyResponses(surveyId, totalResponseCount);
  } else {
    import("../modules/admin/dashboard/view-responses/view-responses.js")
      .then((m) => {
        m.loadSurveyResponses(surveyId, totalResponseCount);
      })
      .catch((err) => {
        swal("Error", "List Survey Responses not found!", "error");
      });
  }
}

// show response lazy loading
function showResponseLazy(responseId) {
  if (window.viewResponseInit) {
    window.viewResponseInit(responseId);
  } else {
    import(
      "../modules/admin/dashboard/view-responses/show-response/show-response.js"
    )
      .then((m) => {
        m.viewResponseInit(responseId);
      })
      .catch((err) => {
        swal("Error", "View Response not found!", "error");
      });
  }
}

// user dashboard lazy loading
function userDashboardLazy() {
  if (window.userDashboardInit) {
    window.userDashboardInit();
  } else {
    import("../modules/user/dashboard/dashboard.js")
      .then((m) => {
        m.userDashboardInit();
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "User Dashboard not found!", "error");
      });
  }
}

// fill survey user lazy loading
function fillSurveyUserLazy(surveyId) {
  if (window.fillSurveyUser) {
    window.fillSurveyUser(surveyId);
  } else {
    import("../modules/user/fill-survey/fill-survey.js")
      .then((m) => {
        m.fillSurveyUser(surveyId);
      })
      .catch((err) => {
        swal("Error", "Fill Survey not found!", "error");
      });
  }
}
