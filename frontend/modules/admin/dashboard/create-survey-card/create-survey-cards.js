import {surveys} from '../../../../data/db.js'; // sample db


// sample domStructure
/*
{
    tag: "div",
    class: "survey",
    children: [
      {
        tag: "h3",
        class: "survey-title",
        text: "Survey 1",
      },
      {
        tag: "p",
        class: "survey-description",
        text: "This is a survey description",
      },
      {
        tag: "p",
        class: "survey-responses",
        text: "Total Responses: 100",
      },
      {
        tag: "button",
        class: "survey-button poppins-normal",
        text: "View Survey",
      },
    ],
  },
*/


// function to create survey card
export default function () {
    const surveyCards = surveys.map((survey) => {
        return {
            tag: "div",
            class: "survey-card",
            children: [
                {
                    tag: "h3",
                    class: "survey-card-title",
                    text: survey.title,
                },
                {
                    tag: "p",
                    class: "survey-card-description",
                    text: survey.description,
                },
                {
                    tag: "p",
                    class: "survey-card-responses",
                    text: `Total Responses: ${survey.responses}`,
                },
                {
                    tag: "button",
                    class: "survey-card-button poppins-normal",
                    text: "View Responses",
                },
            ],
        };
    });

    return surveyCards;
}