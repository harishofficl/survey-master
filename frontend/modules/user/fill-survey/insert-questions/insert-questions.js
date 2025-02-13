import {
  eachQuesValidation,
} from "./event-listeners.js";
import htmlBuilder from "../../../../utils/htmlBuilder.js";
import buildQuestionContainer from "./build-question/build-question.js";

export default function (surveyForm, ListQuestions) {
  // build question-main-container with question and input based on question type
  const questionMainContainersJson = ListQuestions.map((question, index) => {
    const questionNumber = index + 1;
    if (question.type === "text") {
      return buildQuestionContainer(question, "text", questionNumber);
    } else if (question.type === "paragraph") {
      return buildQuestionContainer(question, "textarea", questionNumber);
    } else if (question.type === "number") {
      return buildQuestionContainer(question, "number", questionNumber);
    } else if (question.type === "radio") {
      return buildQuestionContainer(question, "radio", questionNumber);
    } else if (question.type === "checkbox") {
      return buildQuestionContainer(question, "checkbox", questionNumber);
    } else if (question.type === "file") {
      return buildQuestionContainer(question, "file", questionNumber);
    }
  });

  const questions = htmlBuilder(questionMainContainersJson);
  const formBodyContainer = surveyForm.querySelector(".fill-survey-form-body");
  // insert questions into the survey form after header container
  questions.forEach((question) => {
    formBodyContainer.appendChild(question);
    eachQuesValidation(question, ListQuestions[question.id - 1]); // event listeners for each question
  });
}
