import htmlBuilder from "../../../../../utils/htmlBuilder.js";
import { checkboxOptionDom, mcqOptionDom } from "./json-data.js";
import {
    validateKeyPress,
    pasteValidation,
    requiredValidation,
    validateCharacters,
  } from "../../../../../validations/validations.js";

export default function (answerTypeContentObject, type) {
  const domJson = type === "radio" ? mcqOptionDom : checkboxOptionDom;

  const newOptionObject = htmlBuilder(domJson)[0];
  const addOptionObject =
    answerTypeContentObject.querySelector(".mcq-add-option");
  // add new option before add option button
  addOptionObject.before(newOptionObject);

  // add event listener for remove option button
  const deleteOptionObject = newOptionObject.querySelector(".delete-icon");
  deleteOptionObject.addEventListener("click", () => {
    deleteOptionObject.parentElement.remove();
  });

  // validations for new option
  const optionInput = newOptionObject.querySelector(".mcq-option-text");
  optionInput.addEventListener("keypress", (event) =>
    validateKeyPress(event, 100, "10,13,32-126")
  );
  optionInput.addEventListener("paste", (event) => pasteValidation(event, 100));
  optionInput.addEventListener("blur", (event) => {
    validateCharacters(event, "10,13,32-126");
    requiredValidation(event);
  });
}
