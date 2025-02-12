window.addEventListener('load', () => {
    handleRouteChange();
});

window.addEventListener('popstate', handleRouteChange);

export function loadPage(page, needHistory = true) {
  if (window.location.pathname.replace("/", "") === page) return;
  if (needHistory) {
    history.pushState({ page }, "", `/${page}`);
  } else {
    history.replaceState({ page }, "", `/${page}`);
  }
  handleRouteChange();
}

function handleRouteChange() {
    const path = window.location.pathname.replace("/", ""); 

    const routes = {
        "": loginInit,
        "login": loginInit,
        "admin": adminDashboardInitLoad,
        "user": userDashboardInit,
        "admin/create-survey": createSurveyInitLoad,
        "admin/responses": responsesInitLoad,
    };

    const routeAction = routes[path] || routes[window.location.pathname.replace("/", "")];
    if (routeAction) {
        routeAction();
    } else {
        console.error('No route found for path:', path);
    }
}


function lazyAdminInit() {
    if (window.adminPageInit) {
        window.adminPageInit();
    } else {
        import('./js/admin-page/script.js')
            .then(m => {
                m.adminPageInit();
            })
            .catch(err => console.error('Failed to load admin page script:', err));
    }
}