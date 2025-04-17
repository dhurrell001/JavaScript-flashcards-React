import React from "react";

import styles from "./difficultyLevel.module.css";

function DifficultyLevel({ setDifficultyLevel }) {
  function handleDifficultyChange(level) {
    if (level === "easy") {
      setDifficultyLevel("easy");
    }
    if (level === "medium") {
      setDifficultyLevel("medium");
    }
    if (level === "hard") {
      setDifficultyLevel("hard");
    }
  }
  return (
    <div className={styles["difficulty-container"]}>
      <h2>Difficulty Level</h2>
      <button
        className={styles["difficulty-button"]}
        onClick={() => handleDifficultyChange("easy")}
      >
        Easy
      </button>
      <button
        className={styles["difficulty-button"]}
        onClick={() => handleDifficultyChange("medium")}
      >
        Medium
      </button>
      <button
        className={styles["difficulty-button"]}
        onClick={() => handleDifficultyChange("hard")}
      >
        Hard
      </button>
    </div>
  );
}

export default DifficultyLevel;
