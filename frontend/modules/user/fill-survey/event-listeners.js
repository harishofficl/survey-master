import dashboardInit from "../dashboard/dashboard.js";
import { currentUserStore } from "../../../data/store.js";

// post response to the server
async function postResponse(response) {
  const api = `http://localhost:8080/api/responses`;
  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response),
  });
}

export function navBarEventListener(navBarObject) {
  navBarObject.querySelector(".nav-bar__logo").addEventListener("click", () => dashboardInit());
}

export async function fillSurveyEventListener(surveyObject) {

  const submitButton = surveyObject.querySelector(".submit-user-response-btn");

  submitButton.addEventListener("click", function () {
    // Build response object
    const answers = surveyObject.querySelectorAll(
      ".fill-survey-form-body .question-main-container"
    );

    const response = {
      surveyId: surveyObject.getAttribute("id"),
      responderName: currentUserStore.getState().name,
      responses: Array.from(answers).map((answerContainer, index) => {
        const questionText =
          answerContainer.querySelector(".user-question").textContent;
        const inputElement = answerContainer.querySelector(
          ".user-question-input-text, .user-question-input-textarea, .user-question-input-number, .user-question-radio-input, .user-question-checkbox-input, .user-question-file-input"
        );

        let answerValue;
        let answerType;

        if (inputElement) {
          if (inputElement.type === "radio") {
            // Get the selected radio button value
            const selectedRadio = answerContainer.querySelector(
              ".user-question-radio-input:checked"
            );
            if (selectedRadio) answerValue = selectedRadio.value;
            answerType = "radio";
          } else if (inputElement.type === "checkbox") {
            answerValue = Array.from(
              answerContainer.querySelectorAll(
                ".user-question-checkbox-input:checked"
              )
            ).map((checkbox) => checkbox.value);
            answerType = "checkbox";
          } else if (inputElement.type === "file") {
            answerValue = inputElement.files[0].name; // Get the file name
            answerType = "file";
          } else if (inputElement.type === "textarea") {
            answerValue = inputElement.value;
            answerType = "paragraph";
          } else {
            answerValue = inputElement.value;
            answerType = inputElement.type;
          }
        }
        if (answerType === "checkbox") {
          return {
            id: index + 1,
            question: questionText,
            type: answerType,
            options: answerValue,
          };
        }
        return {
          id: index + 1,
          question: questionText,
          type: answerType,
          answer: answerValue,
        };
      }),
    };
    postResponse(response);
    swal(
      "Response Submitted",
      "Your response is submitted successfully...",
      "success"
    );
    dashboardInit();
  });
}