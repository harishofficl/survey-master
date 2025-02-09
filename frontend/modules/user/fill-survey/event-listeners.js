export function navBarEventListener(navBarObject) {
  //...
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
      responses: Array.from(answers).map((answerContainer, index) => {
        const questionText =
          answerContainer.querySelector(".user-question").textContent;
        const inputElement = answerContainer.querySelector(
          ".user-question-input, .user-question-input-textarea, .user-question-input-number, .user-question-radio-input:checked, .user-question-checkbox-input:checked, .user-question-file-input"
        );

        let answerValue;

        if (inputElement) {
          if (inputElement.type === "radio") {
            answerValue = inputElement.value;
          } else if (inputElement.type === "checkbox") {
            answerValue = Array.from(
              answerContainer.querySelectorAll(
                ".user-question-checkbox-input:checked"
              )
            ).map((checkbox) => checkbox.value);
          } else if (inputElement.type === "file") {
            answerValue = inputElement.files[0];
          } else {
            answerValue = inputElement.value;
          }
        }

        return {
          question: questionText,
          answer: answerValue,
        };
      }),
    };

    console.log(response);
    // You can now send the response object to your server using fetch or any other method
  });
}
