// Importing React and necessary hooks and styles
import React from "react";
import styles from "./jsQuestionCard.module.css";
import { useState } from "react";
import MultipleChoiceQuestions from "../data/multipleChoiceQuestions";

// This component is responsible for displaying a question card with multiple choice answers.
// It allows users to select an answer and navigate through questions. Comments ahve been created using ChatGPT.

function JsQuestionCard({ questions }) {
  // State to hold all questions (loaded from external file)
  // const [questions, setQuestion] = useState(MultipleChoiceQuestions);

  // State to track which question card is currently shown
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // State to track which answer the user has selected
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  // Function to move to the previous question, if not at the beginning
  function handleBackClick() {
    if (currentCardIndex > 0 && !isClicked) {
      setCurrentCardIndex((prevState) => prevState - 1);
    }
  }

  // Function to move to the next question
  function handleNextClick() {
    if (!isClicked && currentCardIndex < questions.length - 1) {
      setCurrentCardIndex((prevState) => prevState + 1);
    }
  }

  // Function to check if selected answer is correct and show feedback
  function checkAnswer(correctAnswer) {
    if (correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect, try again!");
    }
  }

  return (
    // Main card container
    <div className={styles.card}>
      {/* Display current question */}
      <p>{questions[currentCardIndex].question}</p>

      <div className={styles["answer-container"]}>
        {/* Map through answer property of question, to display answer choices for current question */}
        {questions[currentCardIndex].answers.map((answer) => {
          return (
            <div key={answer.text}>
              {/* 
    This is a radio input for one of the multiple choice answers.

    - type="radio": Makes this input a radio button.
    - name="answer": Groups all radio buttons together so only one can be selected at a time.
      (All inputs with the same 'name' behave like a group — selecting one will unselect the others.)
    - value={answer.text}: The value associated with this radio button, based on the current answer option.
    - checked={selectedAnswer === answer.text}: 
        This checks if the current selectedAnswer matches this option's text.
        If it does, the radio button appears selected.
    - onChange={...}: 
        When the user selects this radio button:
        1. setSelectedAnswer(answer.text) saves the selected answer to state.
        2. checkAnswer(answer.isCorrect) shows an alert saying whether it's correct.
  */}
              <label>
                {/* Radio button for selecting an answer */}
                <input
                  type="radio"
                  name="answer"
                  value={answer.text}
                  checked={selectedAnswer === answer.text}
                  onChange={() => {
                    setSelectedAnswer(answer.text);
                    checkAnswer(answer.isCorrect); // Show result on selection
                  }}
                />
                {answer.text}
              </label>
            </div>
          );
        })}

        {/* Debug log for development purposes */}
        {console.log("selected answer", selectedAnswer)}
      </div>
      {/* Navigation buttons */}
      <div className={styles["button-container"]}>
        {/* Previous button, disabled on first question */}
        <button onClick={handleBackClick} disabled={currentCardIndex === 0}>
          Prev
        </button>

        {/* Next button to go to the next question */}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default JsQuestionCard;
