import React from "react";
import styles from "./usefulLinks.module.css";

function UsefulLinks() {
  const links = [
    {
      name: "MDN Web Docs - JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org/",
    },
    {
      name: "W3Schools - JavaScript Tutorial",
      url: "https://www.w3schools.com/js/",
    },
    {
      name: "JavaScript Info",
      url: "https://javascript.info/",
    },
    {
      name: "Eloquent JavaScript (book)",
      url: "https://eloquentjavascript.net/",
    },
    {
      name: "You Don't Know JS (book series)",
      url: "https://github.com/getify/You-Dont-Know-JS",
    },
    {
      name: "Stack Overflow - JavaScript Questions",
      url: "https://stackoverflow.com/questions/tagged/javascript",
    },
    {
      name: "Frontend Masters - JavaScript Courses",
      url: "https://frontendmasters.com/learn/javascript/",
    },
    {
      name: "JavaScript 30 (free course)",
      url: "https://javascript30.com/",
    },
    {
      name: "Node.js Documentation",
      url: "https://nodejs.org/en/docs/",
    },
  ];

  return (
    <div className={styles["useful-links-container"]}>
      <h2>Useful Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsefulLinks;
