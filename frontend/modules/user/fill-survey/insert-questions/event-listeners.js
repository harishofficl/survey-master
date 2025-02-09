export default function (surveyForm) {
  const textboxInputs = surveyForm.querySelectorAll(".question-text");
  textboxInputs.forEach((textboxInput) => {
    textboxInput.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  });
}
