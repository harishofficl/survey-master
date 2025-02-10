import publishSurvey from "./publish-survey.js";
import dashboardInit from "../dashboard/dashboard.js"

// event listeners for header and footer
export function eventListenersHeaderFooter() {
  // dynamic size discription textbox
  document.getElementById("description-input").addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

  // publish survey
  document.getElementById("publish-survey-btn").addEventListener("click", () => publishSurvey());
}

// event listeners for nav bar
export function eventListenersNav(navBar) {
  navBar.querySelector(".nav-bar__logo").addEventListener("click", () => dashboardInit());
}
