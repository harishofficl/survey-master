import { loadPage } from "../../../../js/routing.js";

export default function (dashboardBody) {
  const surveyCards = dashboardBody.querySelectorAll(".survey-card");

  surveyCards.forEach((surveyCard) => {
    surveyCard
      .querySelector(".survey-card-button")
      .addEventListener("click", () => {
        loadPage(`user/fill-survey?surveyId=${surveyCard.id}`);
      });
  });
}
