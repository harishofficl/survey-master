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
        class: "create-survey-title-container poppins-normal",
        children: [
          {
            tag: "h1",
            class: "create-survey-title",
            text: "Create Survey",
          },
        ],
      },
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
                  placeholder: "Survey Title*",
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
            tag: "div",
            class: "footer-button-container poppins-semibold",
            children: [
              {
                tag: "button",
                class: "publish-btn poppins-semibold",
                text: "Publish",
                attributes: {
                  id: "publish-survey-btn",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export function createSurveyInit() {
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
