import htmlBuilder from "../../../utils/htmlBuilder.js";
import createQuestion from "./create-question/create-question.js";
import { eventListenersHeaderFooter } from "./event-listeners.js";
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
      {
        tag: "div",
        class: "footer-container",
        children: [
          {
            tag: "button",
            class: "publish-btn",
            text: "Publish",
            attributes: {
              id: "publish-survey-btn",
            },
          },
        ],
      },
    ],
  },
];

export default function () {
  // nav bar
  navBar();

  // title and description content
  const surveyContainer = htmlBuilder(domJson)[0];
  const mainContainer = document.getElementById("main");
  mainContainer.replaceChildren(surveyContainer);

  // add event listeners for header
  eventListenersHeaderFooter();

  // add first question
  createQuestion();


}
