import htmlBuilder from "../../../../../utils/htmlBuilder.js";
import { checkboxOptionDom, mcqOptionDom } from "./json-data.js";

export default function f1(answerTypeContentObject, type) {
    const domJson = type === "radio" ? mcqOptionDom : checkboxOptionDom;

    const newOptionObject = htmlBuilder(domJson)[0];
    const addOptionObject = answerTypeContentObject.querySelector(".mcq-add-option");
    // add new option before add option button
    addOptionObject.before(newOptionObject);

    // add event listener for remove option button
    const deleteOptionObject = newOptionObject.querySelector(".delete-icon");
    deleteOptionObject.addEventListener("click", () => {
        deleteOptionObject.parentElement.remove();
    });
}