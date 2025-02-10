import authenticate from "./authenticate.js";

export function navBarEventListener(){
    // ....
}

export function loginEventListener(){
    const loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        authenticate(email, password);
    });
}