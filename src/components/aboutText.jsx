import React from "react";
import styles from "./aboutText.module.css";

function AboutText() {
  return (
    <div className={styles["about-text-container"]}>
      <h2>About this Project</h2>
      <p>
        This is a lightweight, user-friendly flashcard app built using React.
        It’s crafted specifically for those who are learning or brushing up on
        their JavaScript knowledge.
      </p>
      <p>
        The idea is simple: quick, focused practice through interactive
        flashcards — perfect for self-paced learning or daily review sessions.
        Whether you're just starting out or need to refresh your memory, this
        app aims to make that process smoother.
      </p>
      <p>
        While it currently focuses on core JavaScript concepts, future updates
        will expand into areas like ES6+, DOM manipulation, asynchronous
        programming, and even common coding patterns.
      </p>
      <p>
        This project is still evolving, so expect new features, cards, and
        polish to roll out over time. Suggestions and contributions from fellow
        learners and devs are always welcome!
      </p>
      <p>Thanks for checking it out — and happy coding!</p>
    </div>
  );
}

export default AboutText;
