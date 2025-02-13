import authenticate from "./authenticate.js";
import {
  validateKeyPress,
  pasteValidation,
  requiredValidation,
  validateCharacters,
} from "../../validations/validations.js";

export function navBarEventListener() {
  // ....
}

export function loginEventListener() {

  const loginButton = document.querySelector(".login-button");
  const loginUserName = document.getElementById("email");
  const loginPassword = document.getElementById("password");
  // validations
  
  // username
  loginUserName.addEventListener("keypress", (event) =>
    validateKeyPress(event, 20, "46,48-57,64,65-90,95,97-122")
  );
  loginUserName.addEventListener("paste", (event) =>
    pasteValidation(event, 20)
  );
  loginUserName.addEventListener("blur", (event) => {
    validateCharacters(event, "46,48-57,64,65-90,95,97-122");
    requiredValidation(event);
  });

  // password
    loginPassword.addEventListener("keypress", (event) =>
        validateKeyPress(event, 20, "33-126")
    );
    loginPassword.addEventListener("paste", (event) =>
        pasteValidation(event, 20)
    );
    loginPassword.addEventListener("blur", (event) => {
        validateCharacters(event, "33-126");
        requiredValidation(event);
    });

  // loginbutton click event
  loginButton.addEventListener("click", () => {
    requiredValidation({ target: loginUserName });
    requiredValidation({ target: loginPassword });
    
    const redText = document.querySelectorAll(".validation-error");
    if (redText.length === 0) {
      authenticate(loginUserName.value, loginPassword.value);
    }
  });
}
