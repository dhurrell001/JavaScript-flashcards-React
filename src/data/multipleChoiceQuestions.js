const MultipleChoiceQuestions = [
  {
    id: 1,
    question: "Which method converts JSON to a JavaScript object?",
    answers: [
      { text: "JSON.parse()", isCorrect: true },
      { text: "JSON.stringify()", isCorrect: false },
      { text: "JSON.convert()", isCorrect: false },
      { text: "JSON.objectify()", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: false },
      { text: "const", isCorrect: true },
      { text: "static", isCorrect: false },
    ],
  },
];

export default MultipleChoiceQuestions;
