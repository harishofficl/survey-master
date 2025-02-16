import loadAnswerTypeContent from "./answer-type/load-answer-content.js";
import createQuestion from "./create-question.js";
import {
  validateKeyPress,
  pasteValidation,
  requiredValidation,
  validateCharacters,
} from "../../../../validations/validations.js";

export default function (questionObject) {

  // dynamic size question textbox
  const questionInput = questionObject.querySelector(".question-text");
  questionInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
  questionInput.addEventListener("keypress", (event) =>
    validateKeyPress(event, 500, "10,13,32-126")
  );
  questionInput.addEventListener("paste", (event) =>
    pasteValidation(event, 500)
  );
  questionInput.addEventListener("blur", (event) => {
    validateCharacters(event, "10,13,32-126");
    requiredValidation(event);
  });

  // change module based on response type
  const answerTypeObject = questionObject.querySelector(".answer-type");
  answerTypeObject.addEventListener("change", () => {
    loadAnswerTypeContent(questionObject, answerTypeObject);
  });

  // add question
  const addQuestionIcon = questionObject.querySelector(".add-question-icon");
  addQuestionIcon.addEventListener("click", () => {
    createQuestion(questionObject);
  });

  // delete question
  const deleteQuestionIcon = questionObject.querySelector(
    ".delete-question-icon"
  );
  if (deleteQuestionIcon) {
    deleteQuestionIcon.addEventListener("click", () => {
      questionObject.remove();
    });
  }
}
