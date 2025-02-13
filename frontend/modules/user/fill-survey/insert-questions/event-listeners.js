import {
  validateKeyPress,
  pasteValidation,
  requiredValidation,
  validateCharacters,
} from "../../../../validations/validations.js";

export function eachQuesValidation(questionContainer, questionJson) {
  if (questionJson.type === "text") {
    const textInput = questionContainer.querySelector(
      ".user-question-input-text"
    );
    // validations
    textInput.addEventListener("keypress", (event) => {
      if (questionJson.maxLength === 0) {
        validateKeyPress(event, 100, "32-126");
      } else {
        validateKeyPress(event, questionJson.maxLength, "32-126");
      }
    });

    textInput.addEventListener("paste", (event) => {
      if (questionJson.maxLength === 0) {
        pasteValidation(event, 100);
      } else {
        pasteValidation(event, questionJson.maxLength);
      }
    });

    textInput.addEventListener("blur", (event) => {
      if (questionJson.minLength !== 0) {
        validateCharacters(event, "32-126", questionJson.minLength);
      } else {
        validateCharacters(event, "32-126");
      }
      if (questionJson.required) {
        requiredValidation(event);
      }
    });
  } else if (questionJson.type === "paragraph") {
    const textboxInput = questionContainer.querySelector(
      ".user-question-input-textarea"
    );

    // validations
    textboxInput.addEventListener("keypress", (event) => {
      if (questionJson.maxLength === 0) {
        validateKeyPress(event, 5000, "10,13,32-126");
      } else {
        validateKeyPress(event, questionJson.maxLength, "10,13,32-126");
      }
    });

    textboxInput.addEventListener("paste", (event) => {
      if (questionJson.maxLength === 0) {
        pasteValidation(event, 5000);
      } else {
        pasteValidation(event, questionJson.maxLength);
      }
    });

    textboxInput.addEventListener("blur", (event) => {
      if (questionJson.minLength !== 0) {
        validateCharacters(event, "10,13,32-126", questionJson.minLength);
      } else {
        validateCharacters(event, "10,13,32-126");
      }
      if (questionJson.required) {
        requiredValidation(event);
      }
    });
    // auto resize textarea
    textboxInput.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }
}
