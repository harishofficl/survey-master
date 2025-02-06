import htmlBuilder from "../../../../../utils/htmlBuilder.js";

import { shortAnswerDom, longAnswerDom, numberDom, multipleChoiceDom, checkboxDom, fileDom } from "./json-data.js";

export default function loadAnswerTypeContent(answerTypeElement) {
  const answerTypeValue = answerTypeElement.value;

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
        loadContent(multipleChoiceDom);
        break;
    case "checkbox":
        loadContent(checkboxDom);
        break;
    case "file":
        loadContent(fileDom);
        break;
    default:
        loadContent(shortAnswerDom);
        break;
  }

  function loadContent(domJson) {
    const mainContainer = answerTypeElement.parentElement.parentElement.parentElement.parentElement;
    const answerContainer = mainContainer.querySelector(".answer-main-container");

    const htmlElements = htmlBuilder(domJson);

    htmlElements.forEach((element) => {
      answerContainer.replaceChildren(element);
    });
  }
}
