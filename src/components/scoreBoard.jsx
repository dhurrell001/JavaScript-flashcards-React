import React from "react";
import styles from "./scoreBoard.module.css";

function ScoreBoard({ score, total }) {
  return (
    <div className={styles.scoreCard}>
      <h2>Score</h2>
      <h1>{score}</h1>
    </div>
  );
}

export default ScoreBoard;
