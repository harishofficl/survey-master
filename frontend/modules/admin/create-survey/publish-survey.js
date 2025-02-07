export default function () {
  const title = document.getElementById("survey-title").value;
  const description = document.getElementById("description-input").value;
  const questions = document.querySelectorAll(".question-main-container");
  const questionArray = [];

  questions.forEach((question) => {
    const questionText = question.querySelector(".question-text").value;
    const questionType = question.querySelector(".answer-type").value;
    if (questionType === "text" || questionType === "paragraph") {
      const validationLengths = question.querySelectorAll(".validation-box");
      const minLength = validationLengths[0].value;
      const maxLength = validationLengths[1].value;
      const required = question.querySelector(".required-toggle").checked;
      questionArray.push({
        question: questionText,
        type: questionType,
        minLength,
        maxLength,
        required,
      });
    } else if (questionType === "number") {
      const validationLengths = question.querySelectorAll(".validation-box");
      const minRange = validationLengths[0].value;
      const maxRange = validationLengths[1].value;
      const required = question.querySelector(".required-toggle").checked;
      questionArray.push({
        question: questionText,
        type: questionType,
        minRange,
        maxRange,
        required,
      });
    } else if (questionType === "radio" || questionType === "checkbox") {
      const options = question.querySelectorAll(".mcq-option-text");
      const optionArray = [];
      options.forEach((option) => {
        optionArray.push(option.value);
      });
      const required = question.querySelector(".required-toggle").checked;
      questionArray.push({
        question: questionText,
        type: questionType,
        options: optionArray,
        required,
      });
    } else if (questionType === "file") {
      const required = question.querySelector(".required-toggle").checked;
      const maxFileSize = question.querySelector(".validation-box").value;
      const fileTypes = [];
      const fileTypesInputs = question.querySelectorAll(".file-type-value");
      fileTypesInputs.forEach((fileType) => {
        if (fileType.checked) fileTypes.push(fileType.value);
      });
      questionArray.push({
        question: questionText,
        type: questionType,
        maxFileSize,
        fileTypes,
        required,
      });
    }
  });
  const survey = {
    title,
    description,
    questions: questionArray,
  };

  console.log(survey);
  return survey;
}
