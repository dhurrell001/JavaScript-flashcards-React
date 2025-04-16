const jsQuiz = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language that runs in the browser and on servers (via Node.js). It enables dynamic behavior on websites and supports object-oriented, imperative, and functional programming paradigms.",
  },
  {
    question: "What is a variable?",
    answer:
      "A variable is a named identifier used to store and reference data in memory. JavaScript variables are dynamically typed and can hold any data type, including primitives and objects.",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer:
      "Use `let` or `const` for block-scoped variables. `var` is function-scoped and mostly avoided due to hoisting issues. Example: `let count = 0;` or `const name = 'Alice';`.",
  },
  {
    question: "What’s the difference between let and const?",
    answer:
      "`let` allows you to reassign a value to the variable, while `const` creates a read-only reference. However, objects and arrays declared with `const` can still be mutated.",
  },
  {
    question: "What are data types in JavaScript?",
    answer:
      "JavaScript has 8 basic data types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, and `object`. `typeof` can be used to check most types, though it has quirks (e.g. `typeof null` returns 'object').",
  },
  {
    question: "How do you write a function in JavaScript?",
    answer:
      "Functions can be declared using function declarations (`function greet() {}`), function expressions (`const greet = function() {}`), or arrow functions (`const greet = () => {}`).",
  },
  {
    question: "What is an array?",
    answer:
      "An array is a list-like object with indexed elements. Arrays can store multiple types and provide built-in methods like `.map()`, `.filter()`, `.reduce()`, and more.",
  },
  {
    question: "How do you write an if statement?",
    answer:
      "`if` statements evaluate a condition and execute a code block if the condition is truthy. Syntax: `if (x > 5) { /* code */ } else { /* fallback */ }`",
  },
  {
    question: "What does === mean in JavaScript?",
    answer:
      "`===` is the strict equality operator. It returns true only if the values are equal **and** of the same type. It avoids type coercion, unlike `==`.",
  },
  {
    question: "What is a loop?",
    answer:
      "Loops allow repetitive execution of code. JavaScript supports `for`, `while`, `do...while`, `for...in` (for object keys), and `for...of` (for iterable values).",
  },
  {
    question: "How do you write comments in JavaScript?",
    answer:
      "Use `//` for single-line comments, and `/* ... */` for multi-line comments. Comments are ignored during code execution.",
  },
  {
    question: "What is an object?",
    answer:
      "An object is a collection of key-value pairs. It can represent structured data. Example: `const user = { name: 'Alice', age: 30 }`. Access properties using dot or bracket notation.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The Document Object Model is a hierarchical tree structure representing HTML elements. JavaScript interacts with the DOM using methods like `getElementById`, `querySelector`, and `addEventListener`.",
  },
  {
    question: "What does 'undefined' mean?",
    answer:
      "`undefined` is a primitive value automatically assigned to variables that have been declared but not initialized. It also represents missing object properties or function returns with no value.",
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback is a function passed as an argument to another function and is executed after the parent function completes. Common in asynchronous operations like `setTimeout` or event handlers.",
  },
];

export default jsQuiz;
