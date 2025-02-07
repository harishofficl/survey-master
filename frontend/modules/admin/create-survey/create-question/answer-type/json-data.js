export const shortAnswerDom = [
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
];

export const longAnswerDom = [
  {
    tag: "div",
    class: "answer-container",
    children: [
      {
        tag: "div",
        class: "short-answer long-answer poppins-text",
        children: [
          {
            tag: "p",
            text: "Long-Answer text",
          },
        ],
      },
      {
        tag: "div",
        class: "short-answer-validation long-answer-validation",
        children: [
          {
            tag: "div",
            class: "min-length-container",
            children: [
              {
                tag: "label",
                text: "Min:",
                class: "min-length-label poppins-text",
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
                text: "Max:",
                class: "max-length-label poppins-text",
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
];

export const numberDom = [
  {
    tag: "div",
    class: "answer-container",
    children: [
      {
        tag: "div",
        class: "short-answer number-answer poppins-text",
        children: [
          {
            tag: "p",
            text: "Numerical value",
          },
        ],
      },
      {
        tag: "div",
        class: "short-answer-validation number-answer-validation",
        children: [
          {
            tag: "div",
            class: "min-length-container",
            children: [
              {
                tag: "label",
                text: "Min:",
                class: "min-length-label poppins-text",
              },
              {
                tag: "input",
                class: "validation-box",
                attributes: {
                  type: "number",
                  placeholder: "Min Value",
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
                text: "Max:",
                class: "max-length-label poppins-text",
              },
              {
                tag: "input",
                class: "validation-box",
                attributes: {
                  type: "number",
                  placeholder: "Max Value",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export const multipleChoiceDom = [
  {
    tag: "div",
    class: "answer-container",
    children: [
      {
        tag: "div",
        class: "short-answer mcq-answer poppins-text",
        children: [
          {
            tag: "div",
            class: "mcq-option",
            children: [
              {
                tag: "div",
                class: "option-icon",
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/option-icon.png",
                      alt: "radio",
                    },
                  },
                ],
              },
              {
                tag: "input",
                class: "mcq-option-text mcq-option-property",
                attributes: {
                  type: "text",
                  placeholder: "Option",
                },
              },
              {
                tag: "div",
                class: "delete-icon",
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/x-mark.png",
                      alt: "x-mark.png",
                    },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "mcq-add-option mcq-option",
            children: [
              {
                tag: "div",
                class: "option-icon",
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/option-icon.png",
                      alt: "radio",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "add-option-text mcq-add-option-property",
                text: "Add Option",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const checkboxDom = [
  {
    tag: "div",
    class: "answer-container",
    children: [
      {
        tag: "div",
        class: "short-answer mcq-answer poppins-text",
        children: [
          {
            tag: "div",
            class: "mcq-option",
            children: [
              {
                tag: "div",
                class: "option-icon checkbox-icon",
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/checkbox-icon.png",
                      alt: "radio",
                    },
                  },
                ],
              },
              {
                tag: "input",
                class: "mcq-option-text mcq-option-property",
                attributes: {
                  type: "text",
                  placeholder: "Option",
                },
              },
              {
                tag: "div",
                class: "delete-icon",
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/x-mark.png",
                      alt: "x-mark.png",
                    },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "mcq-add-option mcq-option",
            children: [
              {
                tag: "div",
                class: "option-icon checkbox-icon",
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/checkbox-icon.png",
                      alt: "checkbox",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "add-option-text mcq-add-option-property",
                text: "Add Option",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const fileDom = [
  {
    tag: "div",
    class: "answer-container file-validation-container",
    children: [
      {
        tag: "div",
        class: "file-upload-container",
        children: [
          {
            tag: "div",
            class: "file-upload-toggle-container",
            children: [
              {
                tag: "label",
                class: "file-upload-label poppins-text",
                text: "Allow only specified file types",
                children: [
                  {
                    tag: "label",
                    class: "switch",
                    children: [
                      {
                        tag: "input",
                        class: "file-upload-toggle",
                        attributes: {
                          type: "checkbox",
                          value: "file-type",
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
          {
            tag: "div",
            class: "file-type-container",
            children: [
              {
                tag: "div",
                class: "file-type-checkboxes poppins-text",
                children: [
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "document",
                        },
                      },
                      {
                        text: " Document",
                      },
                    ],
                  },
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "spreadsheet",
                        },
                      },
                      {
                        text: " Spreadsheet",
                      },
                    ],
                  },
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "pdf",
                        },
                      },
                      {
                        text: " PDF",
                      },
                    ],
                  },
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "video",
                        },
                      },
                      {
                        text: " Video",
                      },
                    ],
                  },
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "presentation",
                        },
                      },
                      {
                        text: " Presentation",
                      },
                    ],
                  },
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "image",
                        },
                      },
                      {
                        text: " Image",
                      },
                    ],
                  },
                  {
                    tag: "label",
                    children: [
                      {
                        tag: "input",
                        attributes: {
                          type: "checkbox",
                          value: "audio",
                        },
                      },
                      {
                        text: " Audio",
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
        class: "file-upload-validation",
        children: [
          {
            tag: "div",
            class: "file-size-container",
            children: [
              {
                tag: "label",
                class: "file-size-label poppins-text",
                text: "Max Size:",
              },
              {
                tag: "input",
                class: "validation-box file-size-validation-box",
                attributes: {
                  type: "number",
                  value: "5",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mcqOptionDom = [
  {
    tag: "div",
    attributes: {
      class: "mcq-option",
    },
    children: [
      {
        tag: "div",
        attributes: {
          class: "option-icon",
        },
        children: [
          {
            tag: "img",
            attributes: {
              src: "./images/option-icon.png",
              alt: "radio",
            },
          },
        ],
      },
      {
        tag: "input",
        attributes: {
          type: "text",
          class: "mcq-option-text mcq-option-property",
          placeholder: "Option",
        },
      },
      {
        tag: "div",
        attributes: {
          class: "delete-icon",
        },
        children: [
          {
            tag: "img",
            attributes: {
              src: "./images/x-mark.png",
              alt: "x-mark.png",
            },
          },
        ],
      },
    ],
  },
];

export const checkboxOptionDom = [
  {
    tag: "div",
    attributes: {
      class: "mcq-option",
    },
    children: [
      {
        tag: "div",
        attributes: {
          class: "option-icon checkbox-icon",
        },
        children: [
          {
            tag: "img",
            attributes: {
              src: "./images/checkbox-icon.png",
              alt: "radio",
            },
          },
        ],
      },
      {
        tag: "input",
        attributes: {
          type: "text",
          class: "mcq-option-text mcq-option-property",
          placeholder: "Option",
        },
      },
      {
        tag: "div",
        attributes: {
          class: "delete-icon",
        },
        children: [
          {
            tag: "img",
            attributes: {
              src: "./images/x-mark.png",
              alt: "x-mark.png",
            },
          },
        ],
      },
    ],
  },
];
