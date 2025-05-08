/**
 * JsQuestionCard component displays one multiple-choice JavaScript question at a time,
 * allows users to navigate between questions, select answers, and submit the quiz.
 *
 * @component
 * @param {Object} props - Props passed to this component.
 * @param {Array<Object>} props.questions - List of questions, each with a text string and answer options.
 * @param {Function} props.setIsQuizSubmitted - Function to set quiz as submitted (used by parent component).
 * @param {Function} props.setQuizResult - Function to pass back the final score to the parent.
 *
 * @returns {JSX.Element} The rendered multiple-choice question card.
 */

import React, { useState } from "react";
import styles from "./jsQuestionCard.module.css";

function JsQuestionCard({ questions, setIsQuizSubmitted, setQuizResult }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [score, setScore] = useState(1); // Starts at 1 to prevent 0-indexing issues

  /**
   * Navigates back one question, unless already on the first.
   */
  function handleBackClick() {
    if (currentCardIndex > 0 && !isClicked) {
      setCurrentCardIndex((prevState) => prevState - 1);
    }
  }

  /**
   * Moves to the next question, if available.
   */
  function handleNextClick() {
    if (!isClicked && currentCardIndex < questions.length - 1) {
      setCurrentCardIndex((prevState) => prevState + 1);
    }
  }

  /**
   * Evaluates the selected answer and updates the score if correct.
   *
   * @param {boolean} correctAnswer - Whether the selected answer is correct.
   */
  function checkAnswer(correctAnswer) {
    if (correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      alert("Correct! Your score is: " + score);
    } else {
      alert("Incorrect, try again!");
    }
  }

  return (
    <div className={styles.card}>
      {/* Display the current question */}
      <p>{questions[currentCardIndex].question}</p>

      <div className={styles["answer-container"]}>
        {/* Render answer options for the current question */}
        {questions[currentCardIndex].answers.map((answer) => (
          <div key={answer.text}>
            {/**
             * This <input> is a radio button that allows the user to select an answer.
             *
             * Key Attributes:
             * - type="radio": Makes it a radio button (single choice within a group).
             * - name="answer": Groups all related options. All radio buttons with the same `name` belong to the same group — selecting one deselects the others.
             * - value={answer.text}: The actual value of this radio button, representing one possible answer.
             * - checked={selectedAnswer === answer.text}: Marks this radio button as selected if it matches the current selection.
             * - onChange={...}: Called when the user clicks the radio button.
             *     - Updates the selected answer in state.
             *     - Calls checkAnswer() to give instant feedback.
             */}
            <label>
              <input
                type="radio"
                name="answer"
                value={answer.text}
                checked={selectedAnswer === answer.text}
                onChange={() => {
                  setSelectedAnswer(answer.text);
                  checkAnswer(answer.isCorrect);
                }}
              />
              {answer.text}
            </label>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className={styles["button-container"]}>
        {/* Go back button, disabled if already on the first question */}
        <button onClick={handleBackClick} disabled={currentCardIndex === 0}>
          Prev
        </button>

        {/* Only show submit button on the last question, and if an answer is selected */}
        {currentCardIndex === questions.length - 1 && selectedAnswer && (
          <button
            onClick={() => {
              setIsQuizSubmitted(true);
              setQuizResult(score - 1); // Subtract 1 to offset initial score
            }}
          >
            Submit
          </button>
        )}

        {/* Go to the next question */}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default JsQuestionCard;
