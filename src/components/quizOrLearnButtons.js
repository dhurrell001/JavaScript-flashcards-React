import React from "react";
import styles from "./quizOrLearn.module.css";

function QuizOrLearnButtons({ setIsLearn, setIsQuiz }) {
  function handleLearnClick() {
    setIsLearn(true);
    setIsQuiz(false);
  }
  function handleQuizClick() {
    setIsLearn(false);
    setIsQuiz(true);
  }
  return (
    <div className={styles["button-container"]}>
      <button
        className={styles["button-quiz-choice"]}
        onClick={handleQuizClick}
      >
        Quiz
      </button>
      <button
        className={styles["button-quiz-choice"]}
        onClick={handleLearnClick}
      >
        Learn
      </button>
    </div>
  );
}

export default QuizOrLearnButtons;
