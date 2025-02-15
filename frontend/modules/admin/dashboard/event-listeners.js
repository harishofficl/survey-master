import { loadPage } from "../../../js/routing.js";

export function navBarEventListener(navBarObject) {
  navBarObject.querySelector(".nav-bar__logo").addEventListener("click", () => loadPage("admin"));
}

export function dashboardEventListener() {
  const createSurveyFloatingButton = document.querySelector(
    ".create-survey-floating-button"
  );
  createSurveyFloatingButton.addEventListener("click", () => {
    loadPage("admin/create-survey");
  });
}
