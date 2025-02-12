window.addEventListener('load', () => {
    handleRouteChange();
});

// Listen for back/forward navigation
window.addEventListener('popstate', handleRouteChange);

// Function to navigate to a page by changing the URL and loading the content
export function navigateTo(page) {
    history.pushState({ page }, '', `/${page}`);
    handleRouteChange();
}

function handleRouteChange() {
    const path = window.location.pathname.replace("/", ""); 

    const routes = {
        "": loadLoginPage,
        "login": loadLoginPage,
        "admin": lazyAdminInit,
        "user": lazyUserInit,
        "admin/create-survey": loadCreateSurveyPage,
        "user/survey": () => {
            loadSurveyPage();
        },
        "admin/survey": () => {
            loadAdminSurveyPreview();
        },
    };  

    const routeAction = routes[path] || routes[window.location.pathname.replace("/", "")];
    if (routeAction) {
        routeAction();
    } else {
        console.error('No route found for path:', path);
    }
}

// Function to lazy load the admin module
function lazyAdminInit() {
    document.body.innerHTML = '';
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

// Function to lazy load the user module
function lazyUserInit() {
    document.body.innerHTML = '';
    if (window.userPageInit) {
        window.userPageInit();
        updateStylesheet("css/user-page/style.css");
    } else {
        import('./js/user-page/script.js')
            .then(m => {
                m.userPageInit();
                updateStylesheet("../css/user-page/style.css");
            })
            .catch(err => console.error('Failed to load user page script:', err));
    }
}

// Function to load the create survey page
function loadCreateSurveyPage() {
    document.body.innerHTML = '';
    //lazy loading for creating new survey  
    if(window.createSurveyInit) {
        window.createSurveyInit();
        updateStylesheet("css/create-survey/style.css");
    } else {
        import('./js/create-survey/script.js')
            .then(m => {
                m.createSurveyInit();
                updateStylesheet("../css/create-survey/style.css");
            })
            .catch(err => console.error('Failed to load create survey script:', err));
    }
}


// Function to load the survey page
function loadSurveyPage(id) {
    document.body.innerHTML = '';
    //lazy loading
    if(window.userFormInit) {
        window.userFormInit(id);
        updateStylesheet("css/user-form/style.css");
    } else {
        import('./js/user-form/script.js')
            .then(m => {
                m.userFormInit(id);
                updateStylesheet("../css/user-form/style.css");
            })
            .catch(err => console.error('Failed to load create survey script:', err));
    }
}

//Function to load the admin survey preview page
function loadAdminSurveyPreview(id) {
    document.body.innerHTML = '';
    if(window.AdminPreviewInit) {
        window.userFormInit(id);
        updateStylesheet("css/user-form/style.css");
    } else {
        import('./js/user-form/script.js')
            .then(m => {
                m.AdminPreviewInit(id);
                updateStylesheet("../css/user-form/style.css");
            })
            .catch(err => console.error('Failed to load create survey script:', err));
    }
}
