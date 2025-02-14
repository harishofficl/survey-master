export default function (question, type, questionNumber) {
  const questionText = `${questionNumber}. ${question.question}${question.required ? "*" : ""}`;

  if (type === "text") {
    return {
      tag: "div",
      class: "question-main-container white-bg border poppins-normal",
      attributes: {
        id: questionNumber,
      },
      children: [
        {
          tag: "div",
          class: "user-question-container poppins-semibold",
          children: [
            {
              tag: "p",
              class: "user-question",
              text: questionText,
            },
          ],
        },
        {
          tag: "div",
          class: "user-answer-container poppins-normal",
          children: [
            {
              tag: "input",
              class: "user-question-input user-question-input-text poppins-normal",
              attributes: {
                type: "text",
              },
            },
          ],
        },
      ],
    };
  } else if (type === "textarea") {
    return {
      tag: "div",
      class: "question-main-container white-bg border poppins-normal",
      attributes: {
        id: questionNumber,
      },
      children: [
        {
          tag: "div",
          class: "user-question-container poppins-semibold",
          children: [
            {
              tag: "p",
              class: "user-question",
              text: questionText,
            },
          ],
        },
        {
          tag: "div",
          class: "user-answer-container poppins-normal",
          children: [
            {
              tag: "textarea",
              class: "question-text user-question-input-textarea poppins-normal-copy",
            },
          ],
        },
      ],
    };
  } else if (type === "number") {
    return {
      tag: "div",
      class: "question-main-container white-bg border poppins-normal",
      attributes: {
        id: questionNumber,
      },
      children: [
        {
          tag: "div",
          class: "user-question-container poppins-semibold",
          children: [
            {
              tag: "p",
              class: "user-question",
              text: questionText,
            },
          ],
        },
        {
          tag: "div",
          class: "user-answer-container poppins-normal",
          children: [
            {
              tag: "input",
              class: "user-question-input user-question-input-number poppins-normal",
              attributes: {
                type: "number",
              },
            },
          ],
        },
      ],
    };
  } else if (type === "radio") {
    const radioOptions = question.options.map((option) => {
      return {
        tag: "div",
        class: "user-answer-option-container",
        children: [
          {
            tag: "input",
            class: "user-question-radio-input",
            attributes: {
              type: "radio",
              value: option,
              name: question.question,
            },
          },
          {
            tag: "p",
            class: "user-question-option-text poppins-normal poppins-normal",
            text: option,
          },
        ],
      };
    });

    return {
      tag: "div",
      class: "question-main-container white-bg border poppins-normal",
      attributes: {
        id: questionNumber,
      },
      children: [
        {
          tag: "div",
          class: "user-question-container poppins-semibold",
          children: [
            {
              tag: "p",
              class: "user-question",
              text: questionText,
            },
          ],
        },
        {
          tag: "div",
          class: "user-answer-container poppins-normal",
          children: radioOptions,
        },
      ],
    };
  } else if (type === "checkbox") {
    const checkboxOptions = question.options.map((option) => {
      return {
        tag: "div",
        class: "user-answer-option-container",
        children: [
          {
            tag: "input",
            class: "user-question-checkbox-input",
            attributes: {
              type: "checkbox",
              value: option,
            },
          },
          {
            tag: "p",
            class: "user-question-option-text poppins-normal",
            text: option,
          },
        ],
      };
    });

    return {
      tag: "div",
      class: "question-main-container white-bg border poppins-normal",
      attributes: {
        id: questionNumber,
      },
      children: [
        {
          tag: "div",
          class: "user-question-container poppins-semibold",
          children: [
            {
              tag: "p",
              class: "user-question",
              text: questionText,
            },
          ],
        },
        {
          tag: "div",
          class: "user-answer-container poppins-normal",
          children: checkboxOptions,
        },
      ],
    };
  } else if (type === "file") {
    return {
      tag: "div",
      class: "question-main-container white-bg border poppins-normal",
      attributes: {
        id: questionNumber,
      },
      children: [
        {
          tag: "div",
          class: "user-question-container poppins-semibold",
          children: [
            {
              tag: "p",
              class: "user-question",
              text: questionText,
            },
            {
              tag: "p",
              class: "user-question user-question-file-allowed poppins-text",
              text: `Only ${question.fileTypes.join(", ")} - allowed`,
            }
          ],
        },
        {
          tag: "div",
          class: "user-answer-container poppins-normal",
          children: [
            {
              tag: "input",
              class: "user-question-file-input poppins-normal",
              attributes: {
                type: "file",
              },
            },
          ],
        },
      ],
    };
  }
}