import htmlBuilder from "../../utils/htmlBuilder.js";

const html = `
        <div class="survey-container white-bg border">
          <div class="header-container">
            <div class="title-container poppins-bold">
              <input
                type="text"
                class="survey-title text-box"
                placeholder="Title"
                id="survey-title"
              />
            </div>
            <div class="description-container poppins-normal">
              <textarea
                class="survey-description text-box"
                placeholder="Describe your survey"
                id="description-input"
              ></textarea>
            </div>
          </div>
        </div>`;

const domJson = [
  {
    tag: "div",
    class: "survey-container white-bg border",
    children: [
      {
        tag: "div",
        class: "header-container",
        children: [
          {
            tag: "div",
            class: "title-container poppins-bold",
            children: [
              {
                tag: "input",
                attributes: {
                  type: "text",
                  class: "survey-title text-box",
                  placeholder: "Title",
                  id: "survey-title",
                },
              },
            ],
          },
          {
            tag: "div",
            class: "description-container poppins-normal",
            children: [
              {
                tag: "textarea",
                attributes: {
                  class: "survey-description text-box",
                  placeholder: "Describe your survey",
                  id: "description-input",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function() {
    const elements = htmlBuilder(domJson);
    elements.forEach((element) => {
        document.getElementById("main").appendChild(element); // append to `main`
    });
}