import htmlBuilder from "../../../../../utils/htmlBuilder.js";
import createNewOption from "./newOption.js";
import {
  shortAnswerDom,
  longAnswerDom,
  numberDom,
  multipleChoiceDom,
  checkboxDom,
  fileDom,
} from "./json-data.js";

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

      // add event listeners for mcq and radio type remove option button
      const deleteOptionObject = answerTypeContentObject.querySelector(".delete-icon");
      deleteOptionObject.addEventListener("click", () => {
        deleteOptionObject.parentElement.remove();
      });
      
    }
  }
}
