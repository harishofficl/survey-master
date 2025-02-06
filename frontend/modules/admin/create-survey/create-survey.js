import htmlBuilder from "../../../utils/htmlBuilder.js";
import {eventListeners, } from "./eventListeners.js";
import navBar from "./nav-bar.js";

const html = `<div class="header-container white-bg border">
            <div class="title-container poppins-bold">
              <input
                type="text"
                class="survey-title text-box"
                placeholder="Survey Title"
                id="survey-title"
              />
            </div>
            <div class="description-container poppins-normal">
              <textarea
                class="survey-description text-box"
                placeholder="Describe your survey"
                id="description-input"
              ></textarea>
            </div>
          </div>

          <div class="question-main-container white-bg border">
            <div class="question-container">
              <div class="question poppins-normal">
                <textarea
                  class="question-text"
                  placeholder="Enter your question here"
                ></textarea>
              </div>
              <div class="answer-type-container poppins-normal">
                <label>
                  <select class="answer-type">
                    <option value="text" selected>Short Answer</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="number">Number</option>
                    <option value="radio">MCQs</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="file">File upload</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="answer-container">
              <!-- dynamic module will be loaded based on type of response -->
              <!-- short answer -->
              <div class="short-answer poppins-text">
                <p>Short-Answer text</p>
              </div>
              <div class="short-answer-validation">
                <div class="min-length-container">
                  <label class="min-length-label poppins-text"> Min: </label>
                  <input
                    type="number"
                    class="validation-box"
                    placeholder="Min Length"
                  />
                </div>
                <div class="max-length-container">
                  <label class="max-length-label poppins-text"> Max: </label>
                  <input
                    type="number"
                    class="validation-box"
                    placeholder="Max Length"
                  />
                </div>
              </div>
            </div>
            <div class="question-footer">
              <div class="add-question">
                <a href="#" title="Add a new question">
                  <img src="./images/add-button.png" alt="add question" />
                </a>
              </div>
              <div class="delete-icon">
                <a href="#" title="Delete this question">
                  <img src="./images/delete.png" alt="delete"
                /></a>
              </div>
              <div class="required-container">
                <label class="required-toggle-label poppins-text"
                  >Required
                  <label class="switch">
                    <input type="checkbox" class="required-toggle" />
                    <span class="slider round"></span>
                  </label>
                </label>
              </div>
            </div>
          </div>
        `;

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
                      placeholder: "Enter your question here",
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
                    tag: "a",
                    attributes: {
                      href: "#",
                      title: "Add a new question",
                    },
                    children: [
                      {
                        tag: "img",
                        attributes: {
                          src: "./images/add-button.png",
                          alt: "add question",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "div",
                class: "delete-icon",
                children: [
                  {
                    tag: "a",
                    attributes: {
                      href: "#",
                      title: "Delete this question",
                    },
                    children: [
                      {
                        tag: "img",
                        attributes: {
                          src: "./images/delete.png",
                          alt: "delete",
                        },
                      },
                    ],
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

  // add event listeners
  eventListeners();
}
