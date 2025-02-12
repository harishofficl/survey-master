/* 1. username validation
specs:
    username should not be empty
    username should not be more than 20 characters
    username should contain only alphabets and numbers and _
    username should not start with a number
*/
export function usernameValidation(event) {
  const charCode = event.keyCode;

  if (textBox4.value.length >= 20) {
    event.preventDefault();
    return;
  }

  if (textBox4.value.length === 0 && charCode > 47 && charCode < 58) {
    event.preventDefault();
    return;
  }

  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    (charCode > 47 && charCode < 58) ||
    charCode === 95
  ) {
    // valid
  } else {
    event.preventDefault();
  }
}

/* 2. paste validation */
export function pasteValidation(event, maxLength) {
  // check if its less than required length
  if (event.clipboardData.getData("text").length > maxLength) {
    event.preventDefault();
  } else {
    // valid
  }
}

/* 3. not empty validation */

export function notEmptyValidation(event) {
    //...
}