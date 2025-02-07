import createSurveyInit from "../create-survey/create-survey.js";

export function navBarEventListener(navBarObject) {
  const createSurveyButton = navBarObject.querySelector(
    ".create-survey-button"
  );

  createSurveyButton.addEventListener("click", () => createSurveyInit());
}

export function dashboardEventListener() {
  // ....
}
