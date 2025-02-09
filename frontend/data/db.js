export const surveys = [
  {
    id: "survey-7",
    title: "Employee Satisfaction Survey",
    description:
      "We value your feedback and would like to know your thoughts on your work environment and job satisfaction. Please take a few minutes to complete this survey and help us improve.",
    responses: 120,
    questions: [
      {
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        question: "How satisfied are you with your job?",
        type: "radio",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
      },
      {
        question: "What do you like most about your job?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        question: "How many years have you been with the company?",
        type: "number",
        minValue: 0,
        maxValue: 50,
        required: true,
      },
      {
        question: "Which of the following benefits do you use?",
        type: "checkbox",
        options: ["Health Insurance", "Retirement Plan", "Paid Time Off"],
        required: true,
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        maxFileSize: 10,
        fileTypes: ["document", "image", "pdf"],
        required: false,
      },
    ],
  },
  {
    id: "survey-8",
    title: "Product Feedback Survey",
    description:
      "We would like to hear your thoughts on our latest product. Your feedback is important to us and will help us improve our offerings. Please take a few minutes to complete this survey.",
    responses: 80,
    questions: [
      {
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        question: "How would you rate the quality of the product?",
        type: "radio",
        options: ["Excellent", "Good", "Average", "Poor"],
        required: true,
      },
      {
        question: "What do you like most about the product?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        question: "How many products have you purchased?",
        type: "number",
        minValue: 0,
        maxValue: 100,
        required: true,
      },
      {
        question: "Which features do you use the most?",
        type: "checkbox",
        options: ["Feature A", "Feature B", "Feature C"],
        required: true,
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        maxFileSize: 10,
        fileTypes: ["document", "image", "pdf"],
        required: false,
      },
    ],
  },
  {
    id: "survey-9",
    title: "Event Feedback Survey",
    description:
      "Thank you for attending our event. We would like to hear your feedback to help us improve future events. Please take a few minutes to complete this survey.",
    responses: 60,
    questions: [
      {
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        question: "How satisfied are you with the event?",
        type: "radio",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
      },
      {
        question: "What did you like most about the event?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        question: "How many events have you attended?",
        type: "number",
        minValue: 0,
        maxValue: 100,
        required: true,
      },
      {
        question: "Which sessions did you find most valuable?",
        type: "checkbox",
        options: ["Session A", "Session B", "Session C"],
        required: true,
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        maxFileSize: 10,
        fileTypes: ["document", "image", "pdf"],
        required: false,
      },
    ],
  },
  {
    id: "survey-10",
    title: "Customer Service Feedback Survey",
    description:
      "We value your feedback and would like to know your thoughts on our customer service. Please take a few minutes to complete this survey and help us improve.",
    responses: 90,
    questions: [
      {
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        question: "How satisfied are you with our customer service?",
        type: "radio",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
      },
      {
        question: "What did you like most about our customer service?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        question: "How many times have you used our service?",
        type: "number",
        minValue: 0,
        maxValue: 100,
        required: true,
      },
      {
        question: "Which of our services did you use?",
        type: "checkbox",
        options: ["Service A", "Service B", "Service C"],
        required: true,
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        maxFileSize: 10,
        fileTypes: ["document", "image", "pdf"],
        required: false,
      },
    ],
  },
  {
    id: "survey-11",
    title: "Website Usability Survey",
    description:
      "We would like to hear your thoughts on the usability of our website. Your feedback is important to us and will help us improve our online experience. Please take a few minutes to complete this survey.",
    responses: 70,
    questions: [
      {
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        question: "How easy is it to navigate our website?",
        type: "radio",
        options: ["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"],
        required: true,
      },
      {
        question: "What do you like most about our website?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        question: "How many times have you visited our website?",
        type: "number",
        minValue: 0,
        maxValue: 1000,
        required: true,
      },
      {
        question: "Which features do you use the most?",
        type: "checkbox",
        options: ["Feature A", "Feature B", "Feature C"],
        required: true,
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        maxFileSize: 10,
        fileTypes: ["document", "image", "pdf"],
        required: false,
      },
    ],
  },
];

export const surveyResponses = [
  {
    surveyId: "survey-7",
    responses: [
      {
        question: "What is your name?",
        type: "text",
        answer: "Alice Johnson",
      },
      {
        question: "How satisfied are you with your job?",
        type: "radio",
        answer: "Satisfied",
      },
      {
        question: "What do you like most about your job?",
        type: "paragraph",
        answer: "The collaborative environment and supportive team.",
      },
      {
        question: "How many years have you been with the company?",
        type: "number",
        answer: 5,
      },
      {
        question: "Which of the following benefits do you use?",
        type: "checkbox",
        answer: ["Health Insurance", "Paid Time Off"],
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "resume.pdf",
      },
    ],
  },
  {
    surveyId: "survey-8",
    responses: [
      {
        question: "What is your name?",
        type: "text",
        answer: "Bob Smith",
      },
      {
        question: "How would you rate the quality of the product?",
        type: "radio",
        answer: "Good",
      },
      {
        question: "What do you like most about the product?",
        type: "paragraph",
        answer: "The user-friendly interface and robust features.",
      },
      {
        question: "How many products have you purchased?",
        type: "number",
        answer: 3,
      },
      {
        question: "Which features do you use the most?",
        type: "checkbox",
        answer: ["Feature A", "Feature C"],
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "product_image.jpg",
      },
    ],
  },
  {
    surveyId: "survey-9",
    responses: [
      {
        question: "What is your name?",
        type: "text",
        answer: "Charlie Brown",
      },
      {
        question: "How satisfied are you with the event?",
        type: "radio",
        answer: "Very Satisfied",
      },
      {
        question: "What did you like most about the event?",
        type: "paragraph",
        answer: "The keynote speech and networking opportunities.",
      },
      {
        question: "How many events have you attended?",
        type: "number",
        answer: 4,
      },
      {
        question: "Which sessions did you find most valuable?",
        type: "checkbox",
        answer: ["Session A", "Session B"],
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "event_photo.jpg",
      },
    ],
  },
  {
    surveyId: "survey-10",
    responses: [
      {
        question: "What is your name?",
        type: "text",
        answer: "Diana Prince",
      },
      {
        question: "How satisfied are you with our customer service?",
        type: "radio",
        answer: "Very Satisfied",
      },
      {
        question: "What did you like most about our customer service?",
        type: "paragraph",
        answer: "The prompt and helpful responses.",
      },
      {
        question: "How many times have you used our service?",
        type: "number",
        answer: 10,
      },
      {
        question: "Which of our services did you use?",
        type: "checkbox",
        answer: ["Service A", "Service C"],
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "service_receipt.pdf",
      },
    ],
  },
  {
    surveyId: "survey-11",
    responses: [
      {
        question: "What is your name?",
        type: "text",
        answer: "Eve Adams",
      },
      {
        question: "How easy is it to navigate our website?",
        type: "radio",
        answer: "Easy",
      },
      {
        question: "What do you like most about our website?",
        type: "paragraph",
        answer: "The clean design and intuitive navigation.",
      },
      {
        question: "How many times have you visited our website?",
        type: "number",
        answer: 15,
      },
      {
        question: "Which features do you use the most?",
        type: "checkbox",
        answer: ["Feature A", "Feature B"],
      },
      {
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "screenshot.png",
      },
    ],
  },
];