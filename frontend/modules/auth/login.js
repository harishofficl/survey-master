import htmlBuilder from "../../utils/htmlBuilder.js";
import { loginEventListener } from "./event-listeners.js";
import navBar from "./nav-bar.js";

const loginJson = [
  {
    tag: "div",
    class: "login-container",
    children: [
      {
        tag: "div",
        class: "login-form-container",
        children: [
          {
            tag: "div",
            class: "login-form",
            children: [
              {
                tag: "h1",
                class: "login-title poppins-normal",
                text: "Login",
              },
              {
                tag: "div",
                class: "login-input-container",
                children: [
                  {
                    tag: "label",
                    class: "login-label poppins-normal",
                    text: "Email",
                  },
                  {
                    tag: "input",
                    class: "login-input poppins-normal",
                    attributes: {
                      type: "email",
                      id: "email",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "login-input-container",
                children: [
                  {
                    tag: "label",
                    class: "login-label poppins-normal",
                    text: "Password",
                  },
                  {
                    tag: "input",
                    class: "login-input poppins-normal",
                    attributes: {
                      type: "password",
                      id: "password",
                    },
                  },
                ],
              },
              {
                tag: "button",
                class: "login-button poppins-normal",
                text: "Login",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function () {
  // nav bar
  navBar();

  const login = htmlBuilder(loginJson);
  document.getElementById("main").replaceChildren(login[0]);

  // event listeners
  loginEventListener(login);
}
