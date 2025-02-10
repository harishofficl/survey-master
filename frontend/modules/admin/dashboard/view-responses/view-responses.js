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
}