import htmlBuilder from "./htmlBuilder.js";

const elements = [
  {
    tag: "div",
    class: "container",
    children: [
      {
        tag: "header",
        class: "header",
        attributes: {
          id: "header",
        },
      },
      {
        tag: "main",
        class: "main",
        attributes: {
          id: "main",
        },
      },
    ],
  },
];

export default async function () {
  const domObjects = htmlBuilder(elements);

  for (const domObject of domObjects) {
    document.body.appendChild(domObject);
  }
}
