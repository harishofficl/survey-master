import {
  validateKeyPress,
  pasteValidation,
  requiredValidation,
  validateCharacters,
  validateNumber,
} from "../../../../validations/validations.js";

import { appendErrorMessage } from "../../../../validations/span-error.js";

export function eachQuesValidation(questionContainer, questionJson) {
  //text input
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
  }
  // paragraph input
  else if (questionJson.type === "paragraph") {
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
  // number input validations
  else if (questionJson.type === "number") {
    const numberInput = questionContainer.querySelector(
      ".user-question-input-number"
    );
    // validations
    numberInput.addEventListener("keypress", (event) => {
      validateKeyPress(event, 20, "48-57,46");
    });

    numberInput.addEventListener("paste", (event) => {
      pasteValidation(event, 20);
    });

    numberInput.addEventListener("blur", (event) => {
      if (
        questionJson.maxValue !== 0 &&
        questionJson.minValue !== 0 &&
        questionJson.minValue < questionJson.maxValue
      ) {
        validateNumber(event, questionJson.minValue, questionJson.maxValue);
      } else if (questionJson.maxValue !== 0) {
        validateNumber(event, 0, questionJson.maxValue);
      } else if (questionJson.minValue !== 0) {
        validateNumber(event, questionJson.minValue);
      }
      validateCharacters(event, "48-57");
      if (questionJson.required) {
        requiredValidation(event);
      }
    });
  }
  // file
  else if (questionJson.type === "file") {
    const fileInput = questionContainer.querySelector(
      ".user-question-file-input"
    );
    // validations
    fileInput.addEventListener("blur", (event) => {
      if (questionJson.required) {
        requiredValidation(event);
      }
    });

    // only allow specific files
    fileInput.addEventListener("change", (event) => {
      const fileTypes = questionJson.fileTypes;
      const file = fileInput.files[0];
      if (file) {
        const fileName = file.name;
        const maxFileSize = questionJson.maxFileSize;
        const fileTypeArray = fileName.split(".");
        const fileType = fileTypeArray[fileTypeArray.length - 1];
        if (!fileTypes.includes(fileType)) {
          fileInput.value = "";
          appendErrorMessage(fileInput, `Invalid file type ${fileType}`);
          setTimeout(() => {
            const span = fileInput.nextElementSibling;
            if (span && span.classList.contains("validation-error")) {
              span.remove();
            }
          }, 3000);
        } else if (file.size > maxFileSize * 1024 * 1024) {
          fileInput.value = "";
          appendErrorMessage(
            fileInput,
            `File size exceeds the maximum limit of ${maxFileSize} MB`
          );
          setTimeout(() => {
            const span = fileInput.nextElementSibling;
            if (span && span.classList.contains("validation-error")) {
              span.remove();
            }
          }, 3000);
        }
      }
    });
  }
}
