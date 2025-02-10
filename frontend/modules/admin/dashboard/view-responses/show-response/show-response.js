import fillSurvey from '../../../../user/fill-survey/fill-survey.js';
import showResponseEventListeners from './event-listeners.js';

export default function (response) {

    // show-response page
    const mainContainer = document.querySelector(".main");

    // load fill survey page content without submit button
    
    const fillSurveyPage = fillSurvey(response.surveyId);

    const title = fillSurveyPage.querySelector(".create-survey-title-container > h1");
    title.textContent = "View Response";

    const footerContainer = fillSurveyPage.querySelector(".footer-container");
    footerContainer.remove();

    // insert response data
    const allQuestions = fillSurveyPage.querySelectorAll(".question-main-container");

    allQuestions.forEach((question, index) => {
        if(response.responses[index].type === "text") {
            const input = question.querySelector(".user-question-input-text");
            input.value = response.responses[index].answer;
            input.disabled = true;
        }
        else if (response.responses[index].type === "paragraph") {
            const input = question.querySelector(".user-question-input-textarea");
            input.value = response.responses[index].answer;
            input.disabled = true;
        } else if (response.responses[index].type === "number"){
            const input = question.querySelector(".user-question-input-number");
            input.value = response.responses[index].answer;
            input.disabled = true;
        } else if (response.responses[index].type === "radio") {
            const options = question.querySelectorAll(".user-question-radio-input");
            options.forEach((option) => {
                if(option.value === response.responses[index].answer) {
                    option.checked = true;
                }
                option.disabled = true;
            });
        } else if (response.responses[index].type === "checkbox") {
            const options = question.querySelectorAll(".user-question-checkbox-input");
            const answers = response.responses[index].options;
            options.forEach((option) => {
                if(answers.includes(option.value)) {
                    option.checked = true;
                }
                option.disabled = true;
            });
        } else if (response.responses[index].type === "file") {
            const input = question.querySelector(".user-question-file-input");
            // input.files[0] = response.responses[index].answer;
            input.disabled = true;
        }
            
    });

    // event listeners
    showResponseEventListeners();
}