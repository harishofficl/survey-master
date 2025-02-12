import authenticate from "./authenticate.js";
import { usernameValidation, pasteValidation, notEmptyValidation } from "../../validations/validations.js";




export function navBarEventListener(){
    // ....
}

export function loginEventListener(){

    // event listeners
    const loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        authenticate(email, password);
    });

    // validations
    const loginUserName = document.getElementById("email");
    console.log(loginUserName);
    loginUserName.addEventListener("keypress", usernameValidation);
    loginUserName.addEventListener("paste", pasteValidation, 20);
    loginUserName.addEventListener("blur", notEmptyValidation);

}