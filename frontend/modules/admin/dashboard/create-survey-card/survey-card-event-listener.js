import loadSurveyResponses from "../view-responses/view-responses.js";

export default function (surveyCard) {

    const surveyCardButton = surveyCard.querySelector(".survey-card-button");
    surveyCardButton.addEventListener("click", () => {
        const surveyId = surveyCard.getAttribute("id");
        loadSurveyResponses(surveyId);
    });
}