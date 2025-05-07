const MultipleChoiceQuestionsIntermediate = [
  {
    id: 11,
    question: "What is hoisting in JavaScript?",
    answers: [
      { text: "Moving all code to the bottom of a script", isCorrect: false },
      {
        text: "The behavior of moving variable and function declarations to the top of their scope",
        isCorrect: true,
      },
      {
        text: "Declaring variables without using var, let, or const",
        isCorrect: false,
      },
      { text: "Running scripts asynchronously", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "What’s the difference between `==` and `===` in JavaScript?",
    answers: [
      {
        text: "`==` compares value with type coercion, `===` compares value and type",
        isCorrect: true,
      },
      {
        text: "`==` checks both value and type, `===` does not",
        isCorrect: false,
      },
      {
        text: "`==` is only used in functions, `===` is used globally",
        isCorrect: false,
      },
      {
        text: "`==` checks memory reference, `===` does not",
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    question: "What is the event loop in JavaScript?",
    answers: [
      { text: "A way to loop through objects using keys", isCorrect: false },
      {
        text: "A mechanism that manages asynchronous callbacks after the call stack is clear",
        isCorrect: true,
      },
      { text: "A built-in function for setInterval", isCorrect: false },
      { text: "A method to handle recursive calls", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "What is a closure in JavaScript?",
    answers: [
      { text: "A loop that stops based on a condition", isCorrect: false },
      { text: "A function that returns itself", isCorrect: false },
      {
        text: "A function that retains access to its lexical scope even when executed outside of that scope",
        isCorrect: true,
      },
      {
        text: "An object method that executes during construction",
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "Which statement about function declarations vs expressions is true?",
    answers: [
      {
        text: "Function expressions are hoisted; declarations are not",
        isCorrect: false,
      },
      {
        text: "Function declarations can be called before they’re defined; expressions cannot",
        isCorrect: true,
      },
      { text: "Arrow functions are always hoisted", isCorrect: false },
      { text: "All functions behave the same when declared", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "What does `this` refer to in JavaScript?",
    answers: [
      { text: "`this` always refers to the global object", isCorrect: false },
      {
        text: "`this` refers to the function's return value",
        isCorrect: false,
      },
      {
        text: "`this` refers to the context in which a function is called",
        isCorrect: true,
      },
      {
        text: "`this` points to the variable that declared the function",
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    question:
      "What is the key difference between synchronous and asynchronous code?",
    answers: [
      {
        text: "Asynchronous code runs before synchronous code",
        isCorrect: false,
      },
      {
        text: "Synchronous code blocks execution; asynchronous code allows other tasks to proceed",
        isCorrect: true,
      },
      { text: "Synchronous code uses Promises", isCorrect: false },
      { text: "Asynchronous code uses loops only", isCorrect: false },
    ],
  },
  {
    id: 18,
    question: "What is a Promise in JavaScript?",
    answers: [
      { text: "A function that always returns true", isCorrect: false },
      {
        text: "An object representing the eventual result of an asynchronous operation",
        isCorrect: true,
      },
      { text: "A loop that waits for a condition", isCorrect: false },
      { text: "A special variable type for functions", isCorrect: false },
    ],
  },
  {
    id: 19,
    question: "What does destructuring in JavaScript allow you to do?",
    answers: [
      { text: "Destroy data in variables", isCorrect: false },
      { text: "Change object references", isCorrect: false },
      {
        text: "Extract values from arrays or objects into separate variables",
        isCorrect: true,
      },
      { text: "Prevent objects from mutating", isCorrect: false },
    ],
  },
  {
    id: 20,
    question: "How does the spread operator (`...`) work in JavaScript?",
    answers: [
      { text: "It hides values inside an object", isCorrect: false },
      {
        text: "It spreads variable declarations into functions",
        isCorrect: false,
      },
      {
        text: "It expands arrays or objects into individual elements or properties",
        isCorrect: true,
      },
      { text: "It compresses data for performance", isCorrect: false },
    ],
  },
];

export default MultipleChoiceQuestionsIntermediate;
