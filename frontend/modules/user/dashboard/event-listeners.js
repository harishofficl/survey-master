import { loadPage } from "../../../js/routing.js";


export function dashboardEventListener() {
  // ...
}


export function navBarEventListener(navBarObject) {
  navBarObject.querySelector(".nav-bar__logo").addEventListener("click", () => loadPage("user"));
}