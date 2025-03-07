import htmlBuilder from "../../../utils/htmlBuilder.js";
import navBar from "./nav-bar.js";
import listSurveyCards from "./list-all-surveys/list-survey-cards.js";
import { dashboardEventListener } from "./event-listeners.js";

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


export function userDashboardInit() {
  // navBar
  navBar();

  // dashboard
  const dashboard = htmlBuilder(domJson)[0];
  document.querySelector(".main").replaceChildren(dashboard);

  // list survey cards from db
  const dashboardBody = dashboard.querySelector(".dashboard-body");
  listSurveyCards(dashboardBody);

  // event listeners
  dashboardEventListener();
}