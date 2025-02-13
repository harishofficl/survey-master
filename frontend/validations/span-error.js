import htmlBuilder from "../utils/htmlBuilder.js";

// build red text span and append it below required input field

export function appendErrorMessage(tag, errorMessage) {
  const spanJson = [
    {
      tag: "span",
      class: "red-text poppins-text validation-error",
      text: `${errorMessage || "* required field"}`, // default message
    },
  ];

  const span = htmlBuilder(spanJson)[0];
  tag.insertAdjacentElement("afterend", span);
  return span;
}
