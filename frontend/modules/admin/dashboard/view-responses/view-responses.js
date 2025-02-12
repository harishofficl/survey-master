import htmlBuilder from "../../../../utils/htmlBuilder.js";
import listResponses from "./list-responses.js";

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
                          { tag: "th", text: "Date Time" },
                          { tag: "th", text: "View Response" },
                        ],
                      },
                    ],
                  },
                  {
                    tag: "tbody",
                  },
                  {
                    tag: "tfoot",
                    children: [
                      {
                        tag: "tr",
                        children: [
                          {
                            tag: "td",
                            colspan: "4",
                            children: [
                              {
                                tag: "div",
                                class: "pagination",
                                children: [
                                  { tag: "button", class: "prev-page", text: "Previous" },
                                  { tag: "span", class: "page-info", text: "Page 1 of 10" },
                                  { tag: "button", class: "next-page", text: "Next" },
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
    ],
  },
];

export default function (surveyId) {
  const responses = htmlBuilder(domJson)[0];
  document.getElementById("main").replaceChildren(responses);

  // Add event listener to view response button
  const responsesTable = document.querySelector(".responses-table");
  listResponses(responsesTable, surveyId);

  // Add event listeners for pagination buttons
  document.querySelector(".prev-page").addEventListener("click", () => {
    // Handle previous page click
  });

  document.querySelector(".next-page").addEventListener("click", () => {
    // Handle next page click
  });
}