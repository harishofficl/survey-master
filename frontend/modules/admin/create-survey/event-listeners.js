import publishSurvey from "./publish-survey.js";

export function eventListenersHeaderFooter() {
  // dynamic size discription textbox
  document.getElementById("description-input").addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

  // publish survey
  document.getElementById("publish-survey-btn").addEventListener("click", () => publishSurvey());
}
