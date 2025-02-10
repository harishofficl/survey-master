import { surveyResponses } from "../../../../data/db.js";
import htmlBuilder from "../../../../utils/htmlBuilder.js";
import listResponsesEventListener from "./event-listeners.js";

export default function (responsesTable, surveyId) {
  const tableBody = responsesTable.querySelector("tbody");

  const surveyResponsesData = surveyResponses.filter(
    (response) => response.surveyId === surveyId
  );
  surveyResponsesData.forEach((response, index) => {
    const responseRowObject = htmlBuilder([
      {
        tag: "tr",
        children: [
          { tag: "td", text: index + 1 },
          { tag: "td", text: response.responderName },
          { tag: "td", text: response.createdAt },
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
    ]);
    tableBody.appendChild(responseRowObject[0]);

    // Add event listener to view response button
    const viewResponseButton = responseRowObject[0].querySelector(
      ".view-response-button"
    );
    listResponsesEventListener(viewResponseButton, response);

  });
}
