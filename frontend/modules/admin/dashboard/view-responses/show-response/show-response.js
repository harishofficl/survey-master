import { url } from "../../../../../data/store.js";
import htmlBuilder from "../../../../../utils/htmlBuilder.js";
import fillSurvey from "../../../../user/fill-survey/fill-survey.js";
import showResponseEventListeners from "./event-listeners.js";

async function fetchResponse(responseId) {
  const api = `http://${url}/api/responses/${responseId}`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

export default async function (responseId) {
  const response = await fetchResponse(responseId);
  // show-response page
  const mainContainer = document.querySelector(".main");

  // load fill survey page content without submit button

  const fillSurveyPage = await fillSurvey(response.surveyId);

  const title = fillSurveyPage.querySelector(
    ".create-survey-title-container > h1"
  );
  title.textContent = "View Response";

  const footerContainer = fillSurveyPage.querySelector(".footer-container");
  footerContainer.remove();

  // insert response data
  const allQuestions = fillSurveyPage.querySelectorAll(
    ".question-main-container"
  );

  allQuestions.forEach((question, index) => {
    if (response.responses[index].type === "text") {
      const input = question.querySelector(".user-question-input-text");
      input.value = response.responses[index].answer;
      input.disabled = true;
    } else if (response.responses[index].type === "paragraph") {
      const input = question.querySelector(".user-question-input-textarea");
      input.value = response.responses[index].answer;
      input.disabled = true;
    } else if (response.responses[index].type === "number") {
      const input = question.querySelector(".user-question-input-number");
      input.value = response.responses[index].answer;
      input.disabled = true;
    } else if (response.responses[index].type === "radio") {
      const options = question.querySelectorAll(".user-question-radio-input");
      options.forEach((option) => {
        if (option.value === response.responses[index].answer) {
          option.checked = true;
        }
        option.disabled = true;
      });
    } else if (response.responses[index].type === "checkbox") {
      const options = question.querySelectorAll(
        ".user-question-checkbox-input"
      );
      const answers = response.responses[index].options;
      options.forEach((option) => {
        if (answers.includes(option.value)) {
          option.checked = true;
        }
        option.disabled = true;
      });
    } else if (response.responses[index].type === "file") {
      const input = question.querySelector(".user-question-file-input");
      const inputTypes = question.querySelector(".user-question-file-allowed");
      input.remove();
      inputTypes.remove();

      
      const answer = htmlBuilder([
        {
          tag: "p",
          class: "user-question-file-answer-text",
        }
      ])[0];

      if(response.responses[index].answer.length === 0) {
        answer.textContent = "No file uploaded";
      } else {
        answer.textContent = response.responses[index].answer;
      }
      question.querySelector(".user-answer-container").appendChild(answer);
    }
  });

  // event listeners
  showResponseEventListeners();
}
