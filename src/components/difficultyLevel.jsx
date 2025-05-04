import React from "react";

import styles from "./difficultyLevel.module.css";

function DifficultyLevel({ setDifficultyLevel, difficultyLevel }) {
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
      <h2>Difficulty</h2>
      <button
        className={`${styles["difficulty-button"]} ${
          difficultyLevel === "easy" ? styles["button-selected"] : ""
        }`}
        onClick={() => handleDifficultyChange("easy")}
      >
        Easy
      </button>
      <button
        className={`${styles["difficulty-button"]} ${
          difficultyLevel === "medium" ? styles["button-selected"] : ""
        }`}
        onClick={() => handleDifficultyChange("medium")}
      >
        Medium
      </button>
      <button
        className={`${styles["difficulty-button"]} ${
          difficultyLevel === "hard" ? styles["button-selected"] : ""
        }`}
        onClick={() => handleDifficultyChange("hard")}
      >
        Hard
      </button>
    </div>
  );
}

export default DifficultyLevel;
