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
                            attributes: {
                              id: "pagination-handle-button-container",
                            },
                            children: [
                              {
                                tag: "div",
                                class: "pagination-handle-buttons",
                                children: [
                                  {
                                    tag: "button",
                                    class: "prev-page",
                                    text: "Previous",
                                  },
                                  { tag: "span", class: "page-info" },
                                  {
                                    tag: "button",
                                    class: "next-page",
                                    text: "Next",
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
    ],
  },
];

export default function (surveyId, totalResponseCount) {
  const responses = htmlBuilder(domJson)[0];
  document.getElementById("main").replaceChildren(responses);

  const responsesTable = responses.querySelector(".responses-table");

  const totalPages = Math.ceil(totalResponseCount / 2); // 2 responses per page

  const paginationHandleButtonContainer = document.getElementById(
    "pagination-handle-button-container"
  );

  let page = 0;
  const pageElement =
    paginationHandleButtonContainer.querySelector(".page-info");
  pageElement.textContent = `Page ${page + 1} of ${totalPages}`;

  const updatePage = (newPage) => {
    page = newPage;
    pageElement.textContent = `Page ${page + 1} of ${totalPages}`;
    listResponses(responsesTable, surveyId, page);
  };

  paginationHandleButtonContainer
    .querySelector(".prev-page")
    .addEventListener("click", () => {
      if (page > 0) {
        updatePage(page - 1);
      }
    });

  paginationHandleButtonContainer
    .querySelector(".next-page")
    .addEventListener("click", () => {
      if (page < totalPages - 1) {
        updatePage(page + 1);
      }
    });

  // call this module to update response content
  listResponses(responsesTable, surveyId, page); // list responses
}