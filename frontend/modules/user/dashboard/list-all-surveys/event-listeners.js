import fillSurveyUser from "../../fill-survey/fill-survey.js";

export default function (dashboardBody) {
  const surveyCards = dashboardBody.querySelectorAll(".survey-card");

  surveyCards.forEach((surveyCard) => {
    surveyCard
      .querySelector(".survey-card-button")
      .addEventListener("click", () => {
        // load survey responses
        fillSurveyUser(surveyCard.id); // pass survey id !
      });
  });
}
