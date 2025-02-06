import htmlBuilder from "../../../utils/htmlBuilder.js";
import createQuestion from "./create-question/create-question.js";
import { eventListenersHeader } from "./eventListeners.js";
import navBar from "./nav-bar.js";

const domJson = [
  {
    tag: "div",
    class: "survey-container",
    children: [
      {
        tag: "div",
        class: "header-container white-bg border",
        children: [
          {
            tag: "div",
            class: "title-container poppins-bold",
            children: [
              {
                tag: "input",
                class: "survey-title text-box",
                attributes: {
                  type: "text",
                  placeholder: "Survey Title",
                  id: "survey-title",
                },
              },
            ],
          },
          {
            tag: "div",
            class: "description-container poppins-normal",
            children: [
              {
                tag: "textarea",
                class: "survey-description text-box",
                attributes: {
                  placeholder: "Describe your survey",
                  id: "description-input",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function () {
  // nav bar
  navBar();

  // create-survey content
  const elements = htmlBuilder(domJson);
  elements.forEach((element) => {
    document.getElementById("main").appendChild(element); // append to `main`
  });
  // add event listeners for header
  eventListenersHeader();

  // add first question
  createQuestion();
}
