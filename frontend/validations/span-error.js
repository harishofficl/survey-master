import htmlBuilder from "../utils/htmlBuilder.js";

// build red text span and append it below required input field

export function appendErrorMessage(tag, errorMessage) {
  const spanJson = [
    {
      tag: "div",
      class: "red-text poppins-text validation-error",
      text: `${errorMessage || "* required field"}`,
    },
  ];

  const span = htmlBuilder(spanJson)[0];
  tag.insertAdjacentElement("afterend", span);
  return span;
}
