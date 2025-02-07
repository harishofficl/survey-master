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
            tag: "img",
            attributes: {
              src: "./images/survey-icon.png",
              alt: "Survey Master Logo",
            },
          },
          {
            tag: "h1",
            text: "Survey Master",
          },
        ],
      },
      {
        tag: "div",
        class: "nav-bar__menu open-sans-regular",
        children: [
          {
            tag: "p",
            text: "Responses",
          },
        ],
      },
      {
        tag: "div",
        class: "nav-bar__user open-sans-regular",
        children: [
          {
            tag: "p",
            class: "logout visually-hidden",
            text: "Logout",
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

export default function () {
  const navBar = htmlBuilder(navBarElements)[0];
  document.getElementById("header").replaceChildren(navBar); // append to `header`
}
