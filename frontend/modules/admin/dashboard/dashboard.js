import htmlBuilder from "../../../utils/htmlBuilder.js";
import navBar from "./nav-bar.js";
import buildSurveyCards from "./create-survey-card/create-survey-cards.js";

const domJson = [
  {
    tag: "div",
    class: "dashboard-container poppins-normal",
    children: [
      {
        tag: "div",
        class: "dashboard-header",
        children: [
          {
            tag: "h1",
            class: "dashboard-header__title",
            text: "Dashboard",
          },
        ],
      },
      {
        tag: "div",
        class: "dashboard-body poppins-normal",
      },
    ],
  },
];

export default function () {
  // navBar
  navBar();

  // dashboard
  const dashboard = htmlBuilder(domJson)[0];
  document.querySelector(".main").replaceChildren(dashboard);

  // list survey cards from db
  const dashboardBody = dashboard.querySelector(".dashboard-body");

  const surveyCards = htmlBuilder(buildSurveyCards());
  surveyCards.forEach((surveyCard) => {
    dashboardBody.appendChild(surveyCard);
  });

  // event listeners
  dashboardEventListener();
}