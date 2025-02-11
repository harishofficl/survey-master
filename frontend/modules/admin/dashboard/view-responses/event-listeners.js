import showResponse from "./show-response/show-response.js";

export default function (viewResponseButton, responseId) {
  viewResponseButton.addEventListener("click", () => {
    showResponse(responseId);
  });

}