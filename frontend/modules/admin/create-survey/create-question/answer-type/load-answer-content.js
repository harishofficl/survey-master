import htmlBuilder from "../../../../../utils/htmlBuilder.js";
import createNewOption from "./new-option.js";
import {
  shortAnswerDom,
  longAnswerDom,
  numberDom,
  multipleChoiceDom,
  checkboxDom,
  fileDom,
} from "./json-data.js";

import {
  validateKeyPress,
  pasteValidation,
  requiredValidation,
  validateCharacters,
} from "../../../../../validations/validations.js";

export default function loadAnswerTypeContent(
  questionObject,
  answerTypeObject
) {
  const answerTypeValue = answerTypeObject.value;

  switch (answerTypeValue) {
    case "text":
      loadContent(shortAnswerDom);
      break;
    case "paragraph":
      loadContent(longAnswerDom);
      break;
    case "number":
      loadContent(numberDom);
      break;
    case "radio":
      loadContent(multipleChoiceDom, "radio");
      break;
    case "checkbox":
      loadContent(checkboxDom, "checkbox");
      break;
    case "file":
      loadContent(fileDom);
      break;
    default:
      loadContent(shortAnswerDom);
      break;
  }

  function loadContent(domJson, type) {
    const answerContainer = questionObject.querySelector(
      ".answer-main-container"
    );
    const answerTypeContentObject = htmlBuilder(domJson)[0];
    answerContainer.replaceChildren(answerTypeContentObject);

    // add event listeners for mcq and radio type add option button
    if (type === "radio" || type === "checkbox") {
      const addOptionObject =
        answerTypeContentObject.querySelector(".mcq-add-option");
      addOptionObject.addEventListener("click", () =>
        createNewOption(answerTypeContentObject, type)
      );

      // add event listeners for mcq and radio type option textbox
      const optionInput = answerTypeContentObject.querySelector(".mcq-option-text");
      optionInput.addEventListener("keypress", (event) =>
        validateKeyPress(event, 100, "10,13,32-126")
      );
      optionInput.addEventListener("paste", (event) =>
        pasteValidation(event, 100)
      );
      optionInput.addEventListener("blur", (event) => {
        validateCharacters(event, "10,13,32-126");
        requiredValidation(event);
      });
    }
  }
}
