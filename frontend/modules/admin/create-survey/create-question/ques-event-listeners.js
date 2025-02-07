import loadAnswerTypeContent from "./answer-type/load-answer-content.js";
import createQuestion from "./create-question.js";

export default function (questionObject) {
  // dynamic size question textbox
  const questionInputs = questionObject.querySelector(".question-text");
  questionInputs.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  // change module based on response type
  const answerTypeObject = questionObject.querySelector(".answer-type");
  answerTypeObject.addEventListener("change", () =>
    loadAnswerTypeContent(questionObject, answerTypeObject)
  );

  // add question
  const addQuestionIcon = questionObject.querySelector(".add-question-icon");
  addQuestionIcon.addEventListener("click", () => {
    createQuestion(questionObject);
  });

  // delete question
  const deleteQuestionIcon = questionObject.querySelector(
    ".delete-question-icon"
  );
  deleteQuestionIcon.addEventListener("click", () => {
    questionObject.remove();
  });
}
