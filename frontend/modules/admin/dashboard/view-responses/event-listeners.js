import { loadPage } from "../../../../js/routing.js";

export default function (viewResponseButton, responseId) {
  viewResponseButton.addEventListener("click", () => {
    loadPage(`admin/view-response?responseId=${responseId}`);
  });
}
