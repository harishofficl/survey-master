import createSurveyInit from "../create-survey/create-survey.js";
import dashboardInit from "./dashboard.js";

export function navBarEventListener(navBarObject) {
  navBarObject.querySelector(".nav-bar__logo").addEventListener("click", () => dashboardInit());
}

export function dashboardEventListener() {
  const createSurveyFloatingButton = document.querySelector(
    ".create-survey-floating-button"
  );
  createSurveyFloatingButton.addEventListener("click", () => {
    createSurveyInit();
  });
}
