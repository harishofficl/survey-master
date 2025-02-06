import loadAnswerTypeContent from "./create-question/answer-type/loadAnswerContent.js";

export function eventListenersHeader() {
  // dynamic size discription textbox
  document
    .getElementById("description-input")
    .addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
}
