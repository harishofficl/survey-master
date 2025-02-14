import { url } from "../../../data/store.js";
import htmlBuilder from "../../../utils/htmlBuilder.js";
import { fillSurveyEventListener } from "./event-listeners.js";
import insertSurveyQuestions from "./insert-questions/insert-questions.js";

async function fetchSurvey(surveyId) {
  const api = `http://${url}/api/surveys/${surveyId}`;
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    swal("Error", "Something went wrong while fetching the survey!", "error");
    return null;
  }
}

export default async function (surveyId) {
  const survey = await fetchSurvey(surveyId);
  if(!survey) return;
  
  const domJson = [
    {
      tag: "div",
      class: "survey-container",
      attributes: {
        id: survey.id,
      },
      children: [
        {
          tag: "div",
          class: "create-survey-title-container poppins-normal",
          children: [
            {
              tag: "h1",
              class: "create-survey-title fill-survey-header-title",
              text: "Fill Survey",
            },
          ],
        },
        {
          tag: "div",
          class: "header-container white-bg border",
          children: [
            {
              tag: "div",
              class: "description-container poppins-normal",
              children: [
                {
                  tag: "h1",
                  class: "create-survey-title fill-survey-title",
                  text: survey.title,
                },
                {
                  tag: "p",
                  class: "survey-description fill-survey-description",
                  text: survey.description,
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          class: "fill-survey-form-body",
        },
        {
          tag: "div",
          class: "footer-container",
          children: [
            {
              tag: "div",
              class: "footer-button-container poppins-semibold",
              children: [
                {
                  tag: "button",
                  class: "submit-user-response-btn publish-btn poppins-semibold",
                  text: "Submit",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const surveyForm = htmlBuilder(domJson)[0];
  document.getElementById("main").replaceChildren(surveyForm);

  // insert survey questions
  insertSurveyQuestions(surveyForm, survey.questions);

  // event listeners
  fillSurveyEventListener(surveyForm, survey.questions);

  return surveyForm;
}
