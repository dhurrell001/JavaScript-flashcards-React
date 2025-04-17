const jsHard = [
  {
    question:
      "What is the difference between `Object.freeze()` and `Object.seal()`?",
    answer:
      "`Object.freeze()` makes an object completely immutable. `Object.seal()` allows changing existing properties but prevents adding or removing properties.",
  },
  {
    question: "What is the purpose of the `Symbol` type in JavaScript?",
    answer:
      "`Symbol` is a primitive type used to create unique identifiers, especially useful for object keys to avoid collisions.",
  },
  {
    question: "Explain event delegation and why it's useful.",
    answer:
      "It’s a technique where a single event listener is added to a parent element to handle events for its children, improving performance and flexibility.",
  },
  {
    question: "What does the `??` (nullish coalescing) operator do?",
    answer:
      "Returns the right-hand operand only if the left-hand operand is null or undefined. Unlike `||`, it doesn't consider falsy values like 0 or ''.",
  },
  {
    question: "What is a memory leak, and how can it happen in JS?",
    answer:
      "A memory leak happens when memory is not properly released. Causes include closures holding references, timers, or detached DOM elements.",
  },
  {
    question: "Why is `typeof null` equal to `'object'`?",
    answer:
      "It’s a historical bug in JavaScript due to how values were originally stored in memory.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its outer scope, even after the outer function has returned.",
  },
  {
    question: "What is the event loop in JavaScript?",
    answer:
      "It's the mechanism that allows asynchronous, non-blocking behavior by managing the call stack and the task queue.",
  },
  {
    question: "What are 'pure functions'?",
    answer:
      "Functions that produce the same output given the same input and have no side effects (don’t alter external state).",
  },
  {
    question:
      "What is the difference between `call()`, `apply()`, and `bind()`?",
    answer:
      "`call()` and `apply()` invoke a function with a specified `this`, with arguments passed differently. `bind()` returns a new function with bound `this`.",
  },
  {
    question: "What is tail call optimization?",
    answer:
      "A technique where recursive functions reuse stack frames to prevent stack overflow. Supported in strict mode in ES6 (though not widely implemented).",
  },
  {
    question: "Explain the difference between shallow and deep copy.",
    answer:
      "A shallow copy duplicates top-level properties only. A deep copy recursively clones all nested objects and arrays.",
  },
  {
    question: "What is the Temporal Dead Zone (TDZ)?",
    answer:
      "It’s the time between a variable being declared with `let` or `const` and its initialization, during which it cannot be accessed.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Variable and function declarations are moved to the top of their scope. Only declarations are hoisted, not initializations.",
  },
  {
    question: "What is the difference between `==` and `===`?",
    answer:
      "`==` compares values with type coercion, while `===` checks for both value and type equality.",
  },
  {
    question: "What is a promise, and what are its states?",
    answer:
      "A Promise is an object for handling async operations. It can be `pending`, `fulfilled`, or `rejected`.",
  },
  {
    question: "What does `async/await` do under the hood?",
    answer:
      "`async/await` is syntax sugar over Promises. `await` pauses the execution until the Promise resolves or rejects.",
  },
  {
    question: "What is currying in JavaScript?",
    answer:
      "It’s a functional technique of breaking a function with multiple arguments into a sequence of functions that each take a single argument.",
  },
  {
    question: "What are generator functions and why are they useful?",
    answer:
      "Generators (`function*`) return an iterator and can pause/resume execution using `yield`, making them useful for lazy evaluation or async flows.",
  },
  {
    question:
      "What is the difference between `setImmediate()` and `setTimeout(fn, 0)`?",
    answer:
      "`setImmediate()` executes after the current poll phase in Node.js. `setTimeout(fn, 0)` executes after a minimum delay, in the timer phase.",
  },
];

export default jsHard;
