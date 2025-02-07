export const surveys = [
  {
    title: "Survey 1",
    description:
      "This survey aims to gather detailed information about user preferences and experiences. Your responses will help us improve our services and provide better solutions tailored to your needs. Please take your time to answer each question thoughtfully.",
    responses: 100,
    questions: [
      {
        question: "Question 1",
        type: "text",
        minLength: 5,
        maxLength: 50,
        required: true,
      },
      {
        question: "Question 2",
        type: "paragraph",
        minLength: 50,
        maxLength: 1000,
        required: true,
      },
      {
        question: "Question 3",
        type: "number",
        minRange: 1,
        maxRange: 10,
        required: true,
      },
      {
        question: "Question 4",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 5",
        type: "checkbox",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 6",
        type: "file",
        maxFileSize: 5,
        fileTypes: ["document", "image", "pdf"],
        required: true,
      },
    ],
  },
  {
    title: "Survey 2",
    description:
      "This survey is designed to collect feedback on our recent product launch. Your insights are valuable to us and will help us enhance our product features and user experience. We appreciate your time and effort in completing this survey.",
    responses: 50,
    questions: [
      {
        question: "Question 1",
        type: "text",
        minLength: 5,
        maxLength: 50,
        required: true,
      },
      {
        question: "Question 2",
        type: "paragraph",
        minLength: 50,
        maxLength: 1000,
        required: true,
      },
      {
        question: "Question 3",
        type: "number",
        minRange: 1,
        maxRange: 10,
        required: true,
      },
      {
        question: "Question 4",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 5",
        type: "checkbox",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 6",
        type: "file",
        maxFileSize: 5,
        fileTypes: ["document", "image", "pdf"],
        required: true,
      },
    ],
  },
  {
    title: "Survey 3",
    description: `We are conducting this survey to understand customer satisfaction levels with our services.
      Your feedback is crucial in helping us identify areas for improvement and ensuring we meet your expectations.
      Thank you for participating.`,
    responses: 25,
    questions: [
      {
        question: "Question 1",
        type: "text",
        minLength: 5,
        maxLength: 50,
        required: true,
      },
      {
        question: "Question 2",
        type: "paragraph",
        minLength: 50,
        maxLength: 1000,
        required: true,
      },
      {
        question: "Question 3",
        type: "number",
        minRange: 1,
        maxRange: 10,
        required: true,
      },
      {
        question: "Question 4",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 5",
        type: "checkbox",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 6",
        type: "file",
        maxFileSize: 5,
        fileTypes: ["document", "image", "pdf"],
        required: true,
      },
    ],
  },
  {
    title: "Respond this survey to win a grand vitara",
    description: `Participate in this exciting survey for a chance to win a Grand Vitara! 
      Your responses will help us understand market trends and consumer preferences.
      Don't miss out on this opportunity to share your thoughts and potentially win a fantastic prize.`,
    responses: 10,
    questions: [
      {
        question: "Question 1",
        type: "text",
        minLength: 5,
        maxLength: 50,
        required: false,
      },
      {
        question: "Question 2",
        type: "paragraph",
        minLength: 50,
        maxLength: 1000,
        required: true,
      },
      {
        question: "Question 3",
        type: "number",
        minRange: 1,
        maxRange: 10,
        required: true,
      },
      {
        question: "Question 4",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 90"],
        required: true,
      },
      {
        question: "Question 5",
        type: "checkbox",
        options: ["Option 1", "Option 2", "Option 90"],
        required: false,
      },
      {
        question: "Question 6",
        type: "file",
        maxFileSize: 5,
        fileTypes: ["document", "pdf"],
        required: true,
      },
    ],
  },
  {
    title: "Survey 5",
    description:
      `This survey is designed to collect feedback on our recent product launch.`,
    responses: 50,
    questions: [
      {
        question: "Question 1",
        type: "text",
        minLength: 5,
        maxLength: 50,
        required: true,
      },
      {
        question: "Question 2",
        type: "paragraph",
        minLength: 50,
        maxLength: 1000,
        required: true,
      },
      {
        question: "Question 3",
        type: "number",
        minRange: 1,
        maxRange: 10,
        required: true,
      },
      {
        question: "Question 4",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 5",
        type: "checkbox",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
      },
      {
        question: "Question 6",
        type: "file",
        maxFileSize: 5,
        fileTypes: ["document", "image", "pdf"],
        required: true,
      },
    ],
  },
];
