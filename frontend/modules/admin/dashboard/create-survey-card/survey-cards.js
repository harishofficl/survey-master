import htmlBuilder from "../../../../utils/htmlBuilder.js";
import surveyCardEventListener from "./survey-card-event-listener.js";
import { currentUser } from "../../../../data/db.js";

// sample domStructure
/*
{
    tag: "div",
    class: "survey",
    children: [
      {
        tag: "h3",
        class: "survey-title",
        text: "Survey 1",
      },
      {
        tag: "p",
        class: "survey-description",
        text: "This is a survey description",
      },
      {
        tag: "p",
        class: "survey-responses",
        text: "Total Responses: 100",
      },
      {
        tag: "button",
        class: "survey-button poppins-normal",
        text: "View Survey",
      },
    ],
  },
*/
// fetch surveys from db
async function fetchSurveyCards(userId) {
  const api = `http://localhost:8080/api/surveys/user?userId=${userId}`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

// function to create survey card
export default async function (dashboardBody) {
  const surveys =  await fetchSurveyCards(currentUser.id);
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
