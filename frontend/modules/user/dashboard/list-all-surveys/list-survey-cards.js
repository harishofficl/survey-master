import { url } from "../../../../data/store.js";
import htmlBuilder from "../../../../utils/htmlBuilder.js";
import surveyCardEventListener from "./event-listeners.js";

async function fetchSurveys(page, size) {
  if (!page) page = 0;
  if (!size) size = 15;
  const api = `http://${url}/api/surveys?page=${page}&size=${size}`;
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    swal("Error", "Something went wrong while fetching surveys!", "error");
    return [];
  }
}

export default async function (dashboardBody) {

  const surveys = await fetchSurveys();
  const surveyCards = surveys.map((survey) => {
    return {
      tag: "div",
      class: "survey-card",
      attributes: {
        id: survey.id,
      },
      children: [
        {
          tag: "h3",
          class: "survey-card-title",
          text: survey.title,
        },
        {
          tag: "p",
          class: "survey-card-description",
          text: survey.description,
        },
        {
          tag: "button",
          class: "survey-card-button poppins-normal",
          text: "Answer Survey",
        },
      ],
    };
  });

  // append survey cards to dashboard
  const surveyCardsObject = htmlBuilder(surveyCards);
  dashboardBody.append(...surveyCardsObject);

  // event listeners
  surveyCardEventListener(dashboardBody);
}
