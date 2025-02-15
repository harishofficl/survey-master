import htmlBuilder from "../../../../utils/htmlBuilder.js";
import eventListenersQuestion from "./ques-event-listeners.js";

const domJson = [
  {
    tag: "div",
    class: "question-main-container white-bg border",
    children: [
      {
        tag: "div",
        class: "question-container",
        children: [
          {
            tag: "div",
            class: "question poppins-normal",
            children: [
              {
                tag: "textarea",
                class: "question-text",
                attributes: {
                  placeholder: "Enter your question here*",
                },
              },
            ],
          },
          {
            tag: "div",
            class: "answer-type-container poppins-normal",
            children: [
              {
                tag: "label",
                children: [
                  {
                    tag: "select",
                    class: "answer-type",
                    children: [
                      {
                        tag: "option",
                        text: "Short Answer",
                        attributes: {
                          value: "text",
                          selected: true,
                        },
                      },
                      {
                        tag: "option",
                        text: "Paragraph",
                        attributes: {
                          value: "paragraph",
                        },
                      },
                      {
                        tag: "option",
                        text: "Number",
                        attributes: {
                          value: "number",
                        },
                      },
                      {
                        tag: "option",
                        text: "MCQs",
                        attributes: {
                          value: "radio",
                        },
                      },
                      {
                        tag: "option",
                        text: "Checkbox",
                        attributes: {
                          value: "checkbox",
                        },
                      },
                      {
                        tag: "option",
                        text: "File upload",
                        attributes: {
                          value: "file",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "answer-main-container",
        children: [
          {
            tag: "div",
            class: "answer-container",
            children: [
              {
                tag: "div",
                class: "short-answer poppins-text",
                children: [
                  {
                    tag: "p",
                    text: "Short-Answer text",
                  },
                ],
              },
              {
                tag: "div",
                class: "short-answer-validation",
                children: [
                  {
                    tag: "div",
                    class: "min-length-container",
                    children: [
                      {
                        tag: "label",
                        class: "min-length-label poppins-text",
                        text: " Min:",
                      },
                      {
                        tag: "input",
                        class: "validation-box",
                        attributes: {
                          type: "number",
                          placeholder: "Min Length",
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    class: "max-length-container",
                    children: [
                      {
                        tag: "label",
                        class: "max-length-label poppins-text",
                        text: " Max:",
                      },
                      {
                        tag: "input",
                        class: "validation-box",
                        attributes: {
                          type: "number",
                          placeholder: "Max Length",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "question-footer",
        children: [
          {
            tag: "div",
            class: "add-question",
            children: [
              {
                tag: "img",
                class: "add-question-icon",
                attributes: {
                  src: "../images/add-button.png",
                  alt: "add question",
                },
              },
            ],
          },
          {
            tag: "div",
            class: "delete-icon delete-question-icon",
            children: [
              {
                tag: "img",
                class: "delete-question-icon",
                attributes: {
                  src: "../images/delete.png",
                  alt: "delete",
                },
              },
            ],
          },
          {
            tag: "div",
            class: "required-container",
            children: [
              {
                tag: "label",
                class: "required-toggle-label poppins-text",
                text: "Required",
                children: [
                  {
                    tag: "label",
                    class: "switch",
                    children: [
                      {
                        tag: "input",
                        class: "required-toggle",
                        attributes: {
                          type: "checkbox",
                        },
                      },
                      {
                        tag: "span",
                        class: "slider round",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function (prevQuesObject) {
  const questionObject = htmlBuilder(domJson)[0];
  if (prevQuesObject === undefined) {
    // add questionObject after header-container
    const surveyContainer = document.querySelector(".survey-container");
    const headerContainer = surveyContainer.querySelector(".header-container");
    
    const deleteIcon = questionObject.querySelector(".delete-question-icon");
    deleteIcon.remove();

    surveyContainer.insertBefore(questionObject, headerContainer.nextSibling);

  } else {
    // add questionObject after prevQuesObject.
    const surveyContainer = document.querySelector(".survey-container");
    surveyContainer.insertBefore(questionObject, prevQuesObject.nextSibling);
  }

  // add event listeners for question
  eventListenersQuestion(questionObject);
}
