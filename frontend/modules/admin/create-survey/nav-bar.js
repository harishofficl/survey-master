import htmlBuilder from "../../../utils/htmlBuilder.js";

const navBarElements = [
  {
    tag: "div",
    class: "nav-bar white-bg",
    children: [
      {
        tag: "div",
        class: "nav-bar__logo open-sans-semibold",
        children: [
          {
            tag: "a",
            attributes: {
              href: "#",
            },
            children: [
              {
                tag: "img",
                attributes: {
                  src: "./images/survey-icon.png",
                  alt: "Survey Master Logo",
                },
              },
            ],
          },
          {
            tag: "a",
            attributes: {
              href: "#",
            },
            children: [
              {
                tag: "h1",
                text: "Survey Master",
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "nav-bar__menu open-sans-regular",
        children: [
          {
            tag: "a",
            attributes: {
              href: "#",
            },
            text: "Surveys",
          },
          {
            tag: "a",
            attributes: {
              href: "#",
            },
            text: "Responses",
          },
        ],
      },
      {
        tag: "div",
        class: "nav-bar__user open-sans-regular",
        children: [
          {
            tag: "a",
            class: "login",
            attributes: {
              href: "#",
            },
            text: "Login",
          },
          {
            tag: "a",
            class: "signup",
            attributes: {
              href: "#",
            },
            text: "Sign Up",
          },
          {
            tag: "div",
            class: "user-icon",
            children: [
              {
                tag: "a",
                attributes: {
                  href: "#",
                },
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./images/user-icon.png",
                      alt: "User Icon",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const htmlString = `
<div class="nav-bar white-bg">
  <div class="nav-bar__logo open-sans-semibold">
    <a href="#">
      <img src="./images/survey-icon.png" alt="Survey Master Logo">
    </a>
    <a href="#">
      <h1>Survey Master</h1>
    </a>
  </div>
  <div class="nav-bar__menu open-sans-regular">
    <a href="#">Surveys</a>
    <a href="#">Responses</a>
  </div>
  <div class="nav-bar__user open-sans-regular">
    <a class="login" href="#">Login</a>
    <a class="signup" href="#">Sign Up</a>
    <div class="user-icon">
      <a href="#">
        <img src="./images/user-icon.png" alt="User Icon">
      </a>
    </div>
  </div> `;

export default function() {
  const html = htmlBuilder(navBarElements);
  html.forEach((element) => {
    document.getElementById("header").appendChild(element); // append to `header`
  });
}
