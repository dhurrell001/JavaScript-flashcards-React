const jsIntermediate = [
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope. Variables declared with `var` are hoisted but not initialized. `let` and `const` are hoisted too, but stay in the Temporal Dead Zone until initialized.",
  },
  {
    question: "Explain the difference between == and ===.",
    answer:
      "`==` checks for value equality after type coercion, while `===` checks for both value and type equality without coercion. Use `===` to avoid unexpected behavior from type conversion.",
  },
  {
    question: "What is the event loop?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by putting callbacks in a queue and executing them after the main call stack is clear. It's central to async programming in JavaScript.",
  },
  {
    question: "What is closure in JavaScript?",
    answer:
      "A closure is a function that remembers variables from its outer scope even after that outer function has finished executing. It enables private variables and is commonly used in callbacks and module patterns.",
  },
  {
    question:
      "What is the difference between function declaration and function expression?",
    answer:
      "Function declarations are hoisted and can be used before they're defined. Function expressions (including arrow functions) are not hoisted and must be defined before use.",
  },
  {
    question: "What does 'this' refer to in JavaScript?",
    answer:
      "`this` refers to the context in which a function is called. In the global scope, it refers to the `window` (browser) or `global` (Node.js). In methods, it refers to the object owning the method. Arrow functions do not bind `this`.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code is executed line by line, blocking the thread until it's done. Asynchronous code allows other operations to run while waiting for tasks like network requests, using callbacks, promises, or async/await.",
  },
  {
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Use `.then()` and `.catch()` to handle outcomes.",
  },
  {
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring is a syntax for extracting values from arrays or properties from objects into distinct variables. Example: `const {name, age} = user;` or `const [first, second] = items;`",
  },
  {
    question: "How does the spread operator work?",
    answer:
      "The spread operator (`...`) expands an array or object into individual elements. It’s useful for copying, merging, and passing multiple arguments. Example: `[...arr1, ...arr2]` or `{...obj1, ...obj2}`",
  },
];

export default jsIntermediate;
