import loadAnswerTypeContent from "./answer-type/loadAnswerContent.js";

export function eventListeners() {
  // dynamic size textbox
  document
    .getElementById("description-input")
    .addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

  const questionInputs = document.querySelectorAll(".question-text");
  questionInputs.forEach((element) => {
    element.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  });

  // change module based on response type
  const answerTypeObject = document.querySelector(".answer-type");
  answerTypeObject.addEventListener("change", () => loadAnswerTypeContent(answerTypeObject));
}
