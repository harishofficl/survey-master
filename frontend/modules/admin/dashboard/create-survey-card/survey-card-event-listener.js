import { loadPage } from "../../../../js/routing.js";

export default function (surveyCard) {
    const surveyCardButton = surveyCard.querySelector(".survey-card-button");
    const totalResponseCount = surveyCard.querySelector(".survey-card-responses").textContent.split(": ")[1];
    surveyCardButton.addEventListener("click", () => {
        const surveyId = surveyCard.getAttribute("id");
        loadPage(`admin/list-responses?surveyId=${surveyId}&responseCount=${totalResponseCount}`);
    });
}