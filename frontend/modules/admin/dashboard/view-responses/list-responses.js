import htmlBuilder from "../../../../utils/htmlBuilder.js";
import listResponsesEventListener from "./event-listeners.js";
import { url } from "../../../../data/db.js";

async function fetchSurveyResponses(surveyId) {
  const api = `http://${url}/api/responses/survey?surveyId=${surveyId}`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

export default async function (responsesTable, surveyId) {
  const surveyResponsesData = await fetchSurveyResponses(surveyId);

  const tableBody = responsesTable.querySelector("tbody");

  if (surveyResponsesData.length === 0) {
    const noResponsesRow = htmlBuilder([
      {
        tag: "p",
        class: "no-responses-text poppins-normal",
        text: "No response have been submitted yet.",
      },
    ]);
    tableBody.appendChild(noResponsesRow[0]);
    return;
  }

  surveyResponsesData.forEach((response, index) => {
    const responseRowObject = htmlBuilder([
      {
        tag: "tr",
        children: [
          { tag: "td", text: index + 1 },
          { tag: "td", text: response.responderName },
          { tag: "td", text: response.createdAt.split("T")[0] + " " + response.createdAt.split("T")[1].split(".")[0] },
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
    listResponsesEventListener(viewResponseButton, response.id);
  });
}
