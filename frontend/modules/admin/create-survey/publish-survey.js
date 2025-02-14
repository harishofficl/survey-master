import adminDashboardInit from "../../admin/dashboard/dashboard.js";
import { currentUserStore, url } from "../../../data/store.js";

async function postSurvey(survey) {
  const api = `http://${url}/api/surveys`;
  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(survey),
  });
}

export default async function () {
  const title = document.getElementById("survey-title").value;
  const description = document.getElementById("description-input").value;
  const questions = document.querySelectorAll(".question-main-container");
  const questionArray = [];

  questions.forEach((question, index) => {
    const questionId = index + 1;
    const questionText = question.querySelector(".question-text").value;
    const questionType = question.querySelector(".answer-type").value;
    if (questionType === "text" || questionType === "paragraph") {
      const validationLengths = question.querySelectorAll(".validation-box");
      const minLength = validationLengths[0].value;
      const maxLength = validationLengths[1].value;
      const required = question.querySelector(".required-toggle").checked;
      questionArray.push({
        id: questionId,
        question: questionText,
        type: questionType,
        minLength: minLength,
        maxLength: maxLength,
        required: required,
      });
    } else if (questionType === "number") {
      const validationLengths = question.querySelectorAll(".validation-box");
      const minRange = validationLengths[0].value;
      const maxRange = validationLengths[1].value;
      const required = question.querySelector(".required-toggle").checked;
      questionArray.push({
        id: questionId,
        question: questionText,
        type: questionType,
        minRange: minRange,
        maxRange: maxRange,
        required: required,
      });
    } else if (questionType === "radio" || questionType === "checkbox") {
      const options = question.querySelectorAll(".mcq-option-text");
      const optionArray = [];
      options.forEach((option) => {
        optionArray.push(option.value);
      });
      const required = question.querySelector(".required-toggle").checked;
      questionArray.push({
        id: questionId,
        question: questionText,
        type: questionType,
        options: optionArray,
        required: required,
      });
    } else if (questionType === "file") {
      const required = question.querySelector(".required-toggle").checked;
      const maxFileSize = question.querySelector(".validation-box").value;
      const fileTypes = [];
      const fileTypesInputs = question.querySelectorAll(".file-type-value");
      fileTypesInputs.forEach((fileType) => {
        if (fileType.checked) fileTypes.push(fileType.value);
      });
      questionArray.push({
        id: questionId,
        question: questionText,
        type: questionType,
        maxFileSize: maxFileSize,
        fileTypes: fileTypes,
        required: required,
      });
    }
  });

  const survey = {
    title: title,
    description: description,
    userId: currentUserStore.getState().id,
    questions: questionArray,
  };

  await postSurvey(survey); // post survey to the server

  swal(
    "Survey Published",
    "Your survey has been published successfully!",
    "success"
  ).then(() => {
    adminDashboardInit();
  });
}
