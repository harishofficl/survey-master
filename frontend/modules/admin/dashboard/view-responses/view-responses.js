import htmlBuilder from "../../../../utils/htmlBuilder.js";

const domJson = [
  {
    tag: "div",
    class: "main-responses",
    children: [
      {
        tag: "div",
        class: "responses-header poppins-normal",
        children: [
          {
            tag: "h1",
            class: "responses-header__title",
            text: "Responses",
          },
        ],
      },
      {
        tag: "div",
        class: "responses-container poppins-normal",
        children: [
          {
            tag: "div",
            class: "responses-body poppins-normal",
            children: [
              {
                tag: "table",
                class: "responses-table",
                children: [
                  {
                    tag: "thead",
                    children: [
                      {
                        tag: "tr",
                        children: [
                          { tag: "th", text: "S.No" },
                          { tag: "th", text: "Responder Name" },
                          { tag: "th", text: "Responded DateTime" },
                          { tag: "th", text: "View Response" },
                        ],
                      },
                    ],
                  },
                  {
                    tag: "tbody",
                    children: [
                      // Sample row
                      {
                        tag: "tr",
                        children: [
                          { tag: "td", text: "1" },
                          { tag: "td", text: "John Doe" },
                          { tag: "td", text: "2025-02-08 10:00 AM" },
                          {
                            tag: "td",
                            children: [
                              {
                                tag: "button",
                                class: "view-response-button poppins-normal",
                                text: "View Response",
                              },
                            ],
                          },
                        ],
                      },
                      // Sample row
                      {
                        tag: "tr",
                        children: [
                          { tag: "td", text: "2" },
                          { tag: "td", text: "Harish S" },
                          { tag: "td", text: "2025-01-21 11:51 AM" },
                          {
                            tag: "td",
                            children: [
                              {
                                tag: "button",
                                class: "view-response-button poppins-normal",
                                text: "View Response",
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
    ],
  },
];

export default function () {
  const responses = htmlBuilder(domJson)[0];
  document.getElementById("main").replaceChildren(responses);
}