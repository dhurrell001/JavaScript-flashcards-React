const MultipleChoiceQuestions = [
  {
    id: 1,
    question:
      "JavaScript is a _____ language that enables dynamic behavior on websites.",
    answers: [
      { text: "compiled", isCorrect: false },
      { text: "high‑level, interpreted programming", isCorrect: true },
      { text: "markup", isCorrect: false },
      { text: "query", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "What is a variable in JavaScript?",
    answers: [
      {
        text: "A named identifier for storing data in memory",
        isCorrect: true,
      },
      { text: "A function that returns a value", isCorrect: false },
      { text: "A built‑in object method", isCorrect: false },
      { text: "A type of loop", isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      "Which keyword declares a block‑scoped variable that can be reassigned?",
    answers: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: true },
      { text: "const", isCorrect: false },
      { text: "static", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What’s the main difference between `let` and `const`?",
    answers: [
      { text: "`let` cannot be reassigned; `const` can", isCorrect: false },
      { text: "`const` cannot be reassigned; `let` can", isCorrect: true },
      {
        text: "`let` is function‑scoped; `const` is block‑scoped",
        isCorrect: false,
      },
      { text: "`const` is faster than `let`", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Which of these is a primitive data type in JavaScript?",
    answers: [
      { text: "Array", isCorrect: false },
      { text: "Object", isCorrect: false },
      { text: "Boolean", isCorrect: true },
      { text: "Function", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "How do you write an arrow function named `greet`?",
    answers: [
      { text: "`function greet() {}`", isCorrect: false },
      { text: "`const greet = () => {}`", isCorrect: true },
      { text: "`let greet => {}`", isCorrect: false },
      { text: "`var greet = function => {}`", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "An array in JavaScript is best described as:",
    answers: [
      { text: "A list‑like object with indexed elements", isCorrect: true },
      { text: "A collection of key‑value pairs", isCorrect: false },
      { text: "A function to loop over data", isCorrect: false },
      { text: "A constant reference type", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "Which operator checks both value and type equality?",
    answers: [
      { text: "==", isCorrect: false },
      { text: "=", isCorrect: false },
      { text: "===", isCorrect: true },
      { text: "!==", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Which loop syntax iterates directly over iterable values?",
    answers: [
      { text: "for (let i in arr)", isCorrect: false },
      { text: "for (let v of arr)", isCorrect: true },
      { text: "while (i < arr.length)", isCorrect: false },
      { text: "do { } while (cond)", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "What is a callback function?",
    answers: [
      {
        text: "A function passed into another function to run later",
        isCorrect: true,
      },
      {
        text: "A function that loops until a condition is met",
        isCorrect: false,
      },
      { text: "A function that calls itself recursively", isCorrect: false },
      { text: "A function that always returns undefined", isCorrect: false },
    ],
  },
];

export default MultipleChoiceQuestions;
