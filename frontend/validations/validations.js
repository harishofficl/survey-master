import { appendErrorMessage } from "./span-error.js";

/* 1. keypress validation */
export function validateKeyPress(event, maxLength, allowedChars) { // allowedChars = "64-91,96-123,47-58,95"
  const tag = event.target;
  const charCode = event.keyCode;

  if (tag.value.length >= maxLength) {
    event.preventDefault();
    return;
  }

  const allowedRanges = allowedChars.split(",").map((range) => {
    const [min, max] = range.split("-").map(Number);
    return { min, max: max || min };
  });

  const isAllowed = allowedRanges.some(
    ({ min, max }) => charCode >= min && charCode <= max
  );

  if (!isAllowed) {
    event.preventDefault();
  }
}

/* 2. paste validation */
export function pasteValidation(event, maxLength) {
  if (event.clipboardData.getData("text").length > maxLength) {
    event.preventDefault();
  }
}

/* 3. required validation */
export function requiredValidation(event) {
  const tag = event.target;
  let span = tag.nextElementSibling;
  if (tag.value.length === 0) {
    if (!span || !span.classList.contains("validation-error")) {
      span = appendErrorMessage(tag);
    }
  } else {
    if (
      span &&
      span.classList.contains("validation-error") &&
      span.textContent === "* required field"
    ) {
      span.remove();
    }
  }
}

/* 4. validate characters on blur*/
export function validateCharacters(event, allowedChars, minLength = 0) {
  const tag = event.target;
  const textValue = tag.value;
  let span = tag.nextElementSibling;

  if (textValue.length < minLength) {
    event.preventDefault();
    if (!span || !span.classList.contains("validation-error")) {
      span = appendErrorMessage(
        tag,
        `Minimum ${minLength} characters required`
      );
    } else if (span.textContent === "* required field") {
      span.textContent = `Minimum ${minLength} characters required`;
    } else {
      span.textContent = `Minimum ${minLength} characters required`;
    }
    return;
  } else {
    if (
      span &&
      span.classList.contains("validation-error") &&
      span.textContent.startsWith("Minimum")
    ) {
      span.remove();
    }
  }

  const allowedRanges = allowedChars.split(",").map((range) => {
    const [min, max] = range.split("-").map(Number);
    return { min, max: max || min };
  });

  const isAllowed = (charCode) =>
    allowedRanges.some(({ min, max }) => charCode >= min && charCode <= max);

  const invalidChar = [...textValue].find(
    (char) => !isAllowed(char.charCodeAt(0))
  );

  if (invalidChar) {
    event.preventDefault();
    if (!span || !span.classList.contains("validation-error")) {
      span = appendErrorMessage(tag, `Invalid character: ${invalidChar}`);
    } else if (span.textContent === "* required field") {
      span.textContent = `Invalid character: ${invalidChar}`;
    }
  } else {
    if (
      span &&
      span.classList.contains("validation-error") &&
      span.textContent.startsWith("Invalid character:")
    ) {
      span.remove();
    }
  }
}
