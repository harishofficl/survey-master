import dashboardInit from "./dashboard.js";

export function dashboardEventListener() {
  // ...
}


export function navBarEventListener(navBarObject) {
  navBarObject.querySelector(".nav-bar__logo").addEventListener("click", () => dashboardInit());
}