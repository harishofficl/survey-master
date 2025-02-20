import htmlBuilder from "../../../../utils/htmlBuilder.js";
import surveyCardEventListener from "./survey-card-event-listener.js";
import { currentUserStore, url } from "../../../../data/store.js";

// fetch surveys from db
async function fetchSurveyCards(userId) {
  const api = `http://${url}/api/surveys/user?userId=${userId}`;
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    swal("Error", "Something went wrong while fetching the surveys!", "error");
    return [];
  }
}

// function to create survey card
export default async function (dashboardBody) {
  const surveys =  await fetchSurveyCards(currentUserStore.getState().id);
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
          tag: "p",
          class: "survey-card-responses",
          text: `Total Responses: ${survey.responseCount}`,
        },
        {
          tag: "button",
          class: "survey-card-button poppins-normal",
          text: "View Responses",
        },
      ],
    };
  });

  // append survey cards to dashboard
  const surveyCardsObjects = htmlBuilder(surveyCards);
  surveyCardsObjects.forEach((surveyCard) => {
    dashboardBody.appendChild(surveyCard);
    // add event listener to each survey card
    surveyCardEventListener(surveyCard);
  });
}
