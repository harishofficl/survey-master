import htmlBuilder from "../../../../utils/htmlBuilder.js";
import { surveys } from "../../../../data/db.js";
import surveyCardEventListener from "./event-listeners.js";

export default function (dashboardBody) {
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
