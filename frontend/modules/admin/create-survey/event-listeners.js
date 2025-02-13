import publishSurvey from "./publish-survey.js";
import dashboardInit from "../dashboard/dashboard.js";

import {
  validateKeyPress,
  pasteValidation,
  requiredValidation,
  validateCharacters,
} from "../../../validations/validations.js";

// event listeners for header and footer
export function eventListenersHeaderFooter() {
  const surveyTitle = document.getElementById("survey-title");
  const descriptionInput = document.getElementById("description-input");
  const publishSurveyBtn = document.getElementById("publish-survey-btn");

  // validations

  // survey title
  surveyTitle.addEventListener("keypress", (event) =>
    validateKeyPress(event, 100, "32-126")
  );
  surveyTitle.addEventListener("paste", (event) => pasteValidation(event, 100));

  surveyTitle.addEventListener("blur", (event) => {
    validateCharacters(event, "32-126", 2);
    requiredValidation(event);
  });

  // description
  descriptionInput.addEventListener("keypress", (event) =>
    validateKeyPress(event, 2000, "10,13,32-126")
  );
  descriptionInput.addEventListener("paste", (event) =>
    pasteValidation(event, 2000)
  );

  descriptionInput.addEventListener("blur", (event) => {
    validateCharacters(event, "10,13,32-126");
  });

  descriptionInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  // publish survey
  publishSurveyBtn.addEventListener("click", (event) => {
    requiredValidation({ target: surveyTitle });
    const allQuestions = document.querySelectorAll(".question-text");
    allQuestions.forEach((question) => {
      requiredValidation({ target: question });
    });
    const allOptions = document.querySelectorAll(".mcq-option-text");
    allOptions.forEach((option) => {
      requiredValidation({ target: option });
    });
    const errorCount = document.querySelectorAll(".validation-error");
    if (errorCount.length > 0) {
      errorCount[0].previousElementSibling.focus();
    }
    else if (errorCount.length === 0) publishSurvey();
  });
}

// event listeners for nav bar
export function eventListenersNav(navBar) {
  navBar
    .querySelector(".nav-bar__logo")
    .addEventListener("click", () => dashboardInit());
}
