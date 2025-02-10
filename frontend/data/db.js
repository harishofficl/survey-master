export const surveys = [
  {
    id: "survey-7",
    title: "Employee Satisfaction Survey",
    description:
      "We value your feedback and would like to know your thoughts on your work environment and job satisfaction. Please take a few minutes to complete this survey and help us improve.",
    responses: 120,
    questions: [
      {
        id: "1",
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        id: "2",
        question: "How satisfied are you with your job?",
        type: "radio",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
      },
      {
        id: "3",
        question: "What do you like most about your job?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        id: "4",
        question: "How many years have you been with the company?",
        type: "number",
        minValue: 0,
        maxValue: 50,
        required: true,
      },
      {
        id: "5",
        question: "Which of the following benefits do you use?",
        type: "checkbox",
        options: ["Health Insurance", "Retirement Plan", "Paid Time Off"],
        required: true,
      },
      {
        id: "6",
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
        id: "1",
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        id: "2",
        question: "How would you rate the quality of the product?",
        type: "radio",
        options: ["Excellent", "Good", "Average", "Poor"],
        required: true,
      },
      {
        id: "3",
        question: "What do you like most about the product?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        id: "4",
        question: "How many products have you purchased?",
        type: "number",
        minValue: 0,
        maxValue: 100,
        required: true,
      },
      {
        id: "5",
        question: "Which features do you use the most?",
        type: "checkbox",
        options: ["Feature A", "Feature B", "Feature C"],
        required: true,
      },
      {
        id: "6",
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
        id: "1",
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        id: "2",
        question: "How satisfied are you with the event?",
        type: "radio",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
      },
      {
        id: "3",
        question: "What did you like most about the event?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        id: "4",
        question: "How many events have you attended?",
        type: "number",
        minValue: 0,
        maxValue: 100,
        required: true,
      },
      {
        id: "5",
        question: "Which sessions did you find most valuable?",
        type: "checkbox",
        options: ["Session A", "Session B", "Session C"],
        required: true,
      },
      {
        id: "6",
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
        id: "1",
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        id: "2",
        question: "How satisfied are you with our customer service?",
        type: "radio",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
      },
      {
        id: "3",
        question: "What did you like most about our customer service?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        id: "4",
        question: "How many times have you used our service?",
        type: "number",
        minValue: 0,
        maxValue: 100,
        required: true,
      },
      {
        id: "5",
        question: "Which of our services did you use?",
        type: "checkbox",
        options: ["Service A", "Service B", "Service C"],
        required: true,
      },
      {
        id: "6",
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
        id: "1",
        question: "What is your name?",
        type: "text",
        minLength: 1,
        maxLength: 100,
        required: true,
      },
      {
        id: "2",
        question: "How easy is it to navigate our website?",
        type: "radio",
        options: ["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"],
        required: true,
      },
      {
        id: "3",
        question: "What do you like most about our website?",
        type: "paragraph",
        minLength: 20,
        maxLength: 500,
        required: false,
      },
      {
        id: "4",
        question: "How many times have you visited our website?",
        type: "number",
        minValue: 0,
        maxValue: 1000,
        required: true,
      },
      {
        id: "5",
        question: "Which features do you use the most?",
        type: "checkbox",
        options: ["Feature A", "Feature B", "Feature C"],
        required: true,
      },
      {
        id: "6",
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
    responderName: "Alice Johnson",
    createdAt: "2025-02-08 10:00 AM",
    responses: [
      {
        id: "1",
        question: "What is your name?",
        type: "text",
        answer: "Alice Johnson",
        createdAt: "2025-02-08 10:00 AM",
      },
      {
        id: "2",
        question: "How satisfied are you with your job?",
        type: "radio",
        answer: "Satisfied",
        createdAt: "2025-02-08 10:00 AM",
      },
      {
        id: "3",
        question: "What do you like most about your job?",
        type: "paragraph",
        answer: "The collaborative environment and supportive team.",
        createdAt: "2025-02-08 10:00 AM",
      },
      {
        id: "4",
        question: "How many years have you been with the company?",
        type: "number",
        answer: 5,
        createdAt: "2025-02-08 10:00 AM",
      },
      {
        id: "5",
        question: "Which of the following benefits do you use?",
        type: "checkbox",
        options: ["Health Insurance", "Paid Time Off"],
        createdAt: "2025-02-08 10:00 AM",
      },
      {
        id: "6",
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "resume.pdf",
        createdAt: "2025-02-08 10:00 AM",
      },
    ],
  },
  {
    surveyId: "survey-8",
    responderName: "Bob Smith",
    createdAt: "2025-02-08 11:00 AM",
    responses: [
      {
        id: "1",
        question: "What is your name?",
        type: "text",
        answer: "Bob Smith",
        createdAt: "2025-02-08 11:00 AM",
      },
      {
        id: "2",
        question: "How would you rate the quality of the product?",
        type: "radio",
        answer: "Good",
        createdAt: "2025-02-08 11:00 AM",
      },
      {
        id: "3",
        question: "What do you like most about the product?",
        type: "paragraph",
        answer: "The user-friendly interface and robust features.",
        createdAt: "2025-02-08 11:00 AM",
      },
      {
        id: "4",
        question: "How many products have you purchased?",
        type: "number",
        answer: 3,
        createdAt: "2025-02-08 11:00 AM",
      },
      {
        id: "5",
        question: "Which features do you use the most?",
        type: "checkbox",
        options: ["Feature A", "Feature C"],
        createdAt: "2025-02-08 11:00 AM",
      },
      {
        id: "6",
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "product_image.jpg",
        createdAt: "2025-02-08 11:00 AM",
      },
    ],
  },
  {
    surveyId: "survey-9",
    responderName: "Charlie Brown",
    createdAt: "2025-02-08 12:00 PM",
    responses: [
      {
        id: "1",
        question: "What is your name?",
        type: "text",
        answer: "Charlie Brown",
        createdAt: "2025-02-08 12:00 PM",
      },
      {
        id: "2",
        question: "How satisfied are you with the event?",
        type: "radio",
        answer: "Very Satisfied",
        createdAt: "2025-02-08 12:00 PM",
      },
      {
        id: "3",
        question: "What did you like most about the event?",
        type: "paragraph",
        answer: "The keynote speech and networking opportunities.",
        createdAt: "2025-02-08 12:00 PM",
      },
      {
        id: "4",
        question: "How many events have you attended?",
        type: "number",
        answer: 4,
        createdAt: "2025-02-08 12:00 PM",
      },
      {
        id: "5",
        question: "Which sessions did you find most valuable?",
        type: "checkbox",
        options: ["Session A", "Session B"],
        createdAt: "2025-02-08 12:00 PM",
      },
      {
        id: "6",
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "event_photo.jpg",
        createdAt: "2025-02-08 12:00 PM",
      },
    ],
  },
  {
    surveyId: "survey-10",
    responderName: "Diana Prince",
    createdAt: "2025-02-08 01:00 PM",
    responses: [
      {
        id: "1",
        question: "What is your name?",
        type: "text",
        answer: "Diana Prince",
        createdAt: "2025-02-08 01:00 PM",
      },
      {
        id: "2",
        question: "How satisfied are you with our customer service?",
        type: "radio",
        answer: "Very Satisfied",
        createdAt: "2025-02-08 01:00 PM",
      },
      {
        id: "3",
        question: "What did you like most about our customer service?",
        type: "paragraph",
        answer: "The prompt and helpful responses.",
        createdAt: "2025-02-08 01:00 PM",
      },
      {
        id: "4",
        question: "How many times have you used our service?",
        type: "number",
        answer: 10,
        createdAt: "2025-02-08 01:00 PM",
      },
      {
        id: "5",
        question: "Which of our services did you use?",
        type: "checkbox",
        options: ["Service A", "Service C"],
        createdAt: "2025-02-08 01:00 PM",
      },
      {
        id: "6",
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "service_receipt.pdf",
        createdAt: "2025-02-08 01:00 PM",
      },
    ],
  },
  {
    surveyId: "survey-11",
    responderName: "Eve Adams",
    createdAt: "2025-02-08 02:00 PM",
    responses: [
      {
        id: "1",
        question: "What is your name?",
        type: "text",
        answer: "Eve Adams",
        createdAt: "2025-02-08 02:00 PM",
      },
      {
        id: "2",
        question: "How easy is it to navigate our website?",
        type: "radio",
        answer: "Easy",
        createdAt: "2025-02-08 02:00 PM",
      },
      {
        id: "3",
        question: "What do you like most about our website?",
        type: "paragraph",
        answer: "The clean design and intuitive navigation.",
        createdAt: "2025-02-08 02:00 PM",
      },
      {
        id: "4",
        question: "How many times have you visited our website?",
        type: "number",
        answer: 15,
        createdAt: "2025-02-08 02:00 PM",
      },
      {
        id: "5",
        question: "Which features do you use the most?",
        type: "checkbox",
        options: ["Feature A", "Feature B"],
        createdAt: "2025-02-08 02:00 PM",
      },
      {
        id: "6",
        question: "Please upload any relevant documents or images.",
        type: "file",
        answer: "screenshot.png",
        createdAt: "2025-02-08 02:00 PM",
      },
    ],
  },
];