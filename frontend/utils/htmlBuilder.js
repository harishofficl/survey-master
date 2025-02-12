export default function htmlBuilder(elements, parent) {
  const listOfElements = [];
  const fragment = document.createDocumentFragment();

  elements.forEach((element) => {
    const tagObject = document.createElement(element.tag);
    const entries = Object.entries(element);

    entries.forEach(([key, value]) => {
      switch (key) {
        case "class":
          tagObject.className = value;
          break;
        case "text":
          tagObject.innerHTML = value;
          break;
        case "style":
          Object.entries(value).forEach(([styleKey, styleValue]) => {
            tagObject.style[styleKey] = styleValue;
          });
          break;
        case "attributes":
          Object.entries(value).forEach(([attrKey, attrValue]) => {
            tagObject.setAttribute(attrKey, attrValue);
          });
          break;
        case "colspan":
          tagObject.colSpan = value;
          break;
        case "children":
          htmlBuilder(value, tagObject);
          break;
      }
    });

    if (parent === undefined) {
      listOfElements.push(tagObject);
    } else {
      fragment.appendChild(tagObject);
    }
  });

  if (parent !== undefined) {
    parent.appendChild(fragment);
  }

  return listOfElements;
}

/*

const elements = [
  {
    tag: "h2",
    class: "form-heading",
    attributes: {
      id: "user-form-heading",
    },
    text: "FORM",
  },
  {
    tag: "form",
    class: "user-form",
    attributes: {
      id: "user-form",
    },
    children: [
      {
        tag: "div",
        class: "div-main-row-1",
        attributes: {
          id: "div-main-row-1",
        },
        children: [
          {
            tag: "div",
            class: "div-row-1",
            attributes: {
              id: "div-row-1",
            },
            children: [
              {
                tag: "div",
                class: "first-name",
                attributes: {
                  id: "first-name-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "First Name:*",
                    attributes: {
                      for: "first-name",
                      id: "label-first-name",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "text",
                      id: "first-name",
                      name: "first-name",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "last-name",
                attributes: {
                  id: "last-name-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Last Name:*",
                    attributes: {
                      for: "last-name",
                      id: "label-last-name",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "text",
                      id: "last-name",
                      name: "last-name",
                    },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "div-row-2",
            attributes: {
              id: "div-row-2",
            },
            children: [
              {
                tag: "div",
                class: "age",
                attributes: {
                  id: "age-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Age:",
                    attributes: {
                      for: "age",
                      id: "label-age",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "number",
                      id: "age",
                      name: "age",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "gender",
                attributes: {
                  id: "gender-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Gender:",
                    attributes: {
                      for: "gender",
                      id: "label-gender",
                    },
                  },
                  {
                    tag: "select",
                    attributes: {
                      id: "gender",
                      name: "gender",
                    },
                    children: [
                      {
                        tag: "option",
                        text: "Male",
                        class: "option-male",
                        attributes: {
                          value: "male",
                          id: "option-male",
                        },
                      },
                      {
                        tag: "option",
                        text: "Female",
                        class: "option-female",
                        attributes: {
                          value: "female",
                          id: "option-female",
                        },
                      },
                      {
                        tag: "option",
                        text: "Other",
                        class: "option-other",
                        attributes: {
                          value: "other",
                          id: "option-other",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "div-row-3",
            attributes: {
              id: "div-row-3",
            },
            children: [
              {
                tag: "div",
                class: "email",
                attributes: {
                  id: "email-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Email:*",
                    attributes: {
                      for: "email",
                      id: "label-email",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "email",
                      id: "email-input",
                      name: "email",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "phone-number",
                attributes: {
                  id: "phone-number-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Phone Number:*",
                    attributes: {
                      for: "phone-number",
                      id: "label-phone-number",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "tel",
                      id: "phone-number",
                      name: "phone-number",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "div-main-row-2",
        attributes: {
          id: "div-main-row-2",
        },
        children: [
          {
            tag: "div",
            class: "submit-button-div",
            attributes: {
              id: "submit-button-div",
            },
            children: [
              {
                tag: "button",
                text: "Submit",
                class: "submit-button",
                attributes: {
                  type: "submit",
                  id: "submit-button",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
*/
