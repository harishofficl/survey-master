import dashboardInit from "../dashboard/dashboard.js";

export function navBarEventListener(navBarObject) {
  navBarObject.querySelector(".nav-bar__logo").addEventListener("click", () => dashboardInit());
}

export function fillSurveyEventListener(surveyObject) {
  const submitButton = surveyObject.querySelector(".submit-user-response-btn");

  submitButton.addEventListener("click", function () {
    // Build response object
    const answers = surveyObject.querySelectorAll(
      ".fill-survey-form-body .question-main-container"
    );

    const response = {
      surveyId: surveyObject.id,
      responderName: localStorage.getItem("user"),
      createdAt: new Date(),
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
            if (inputElement.checked) answerValue = inputElement.value;
            answerType = "radio";
          } else if (inputElement.type === "checkbox") {
            answerValue = Array.from(
              answerContainer.querySelectorAll(
                ".user-question-checkbox-input:checked"
              )
            ).map((checkbox) => checkbox.value);
            answerType = "checkbox";
          } else if (inputElement.type === "file") {
            answerValue = inputElement.files[0];
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
            option: answerValue,
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
    console.log(response);
    swal(
      "Response Submitted",
      "Your response is submitted successfully...",
      "success"
    );
    dashboardInit();
  });
}
