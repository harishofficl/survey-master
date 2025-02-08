import loadSurveyResponses from "../view-responses/view-responses.js";

export default function (dashboardBody) {

    const surveyCardViewResponses = dashboardBody.querySelectorAll(".survey-card-button");

    surveyCardViewResponses.forEach((surveyCardViewResponse) => {
        surveyCardViewResponse.addEventListener("click", () => {
            // load survey responses
            loadSurveyResponses(surveyCardViewResponse.parentElement); // pass survey card
        });
    });
}