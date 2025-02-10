import showResponse from "./show-response/show-response.js";

export default function (viewResponseButton, response) {
  viewResponseButton.addEventListener("click", () => {
    showResponse(response);
  });

}