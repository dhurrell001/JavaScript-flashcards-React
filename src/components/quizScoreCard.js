import React from "react";

import styles from "./quizScoreCard.module.css";

function QuizScoreCard({ score, totalQuestions, setIsQuizSubmitted }) {
  return (
    <div className={styles.scorecard}>
      <h2>Your Score</h2>
      <p>
        You answered {score} out of {totalQuestions} questions correctly.
      </p>
      <p>Your score is: {(score / totalQuestions) * 100}%</p>
      <button onClick={() => setIsQuizSubmitted(false)}>Restart Quiz</button>
    </div>
  );
}

export default QuizScoreCard;
// This component is responsible for displaying the score card at the end of the quiz. It shows the user's score and total questions answered correctly.
