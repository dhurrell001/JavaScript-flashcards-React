import React from "react";
import styles from "./jsQuestionCard.module.css";
import { useState } from "react";
import MultipleChoiceQuestions from "../data/multipleChoiceQuestions";

function JsQuestionCard({
  question,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
}) {
  const [questions, setQuestion] = useState(MultipleChoiceQuestions);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleBackClick() {
    if (currentCardIndex > 0 && !isClicked) {
      setCurrentCardIndex((prevState) => prevState - 1);
    }
  }
  function handleNextClick() {
    if (!isClicked) {
      setCurrentCardIndex((prevState) => prevState + 1);
    }
  }

  function checkAnswer(correctAnswer) {
    if (correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect, try again!");
    }
  }

  return (
    <div className={styles.card}>
      <p>{questions[currentCardIndex].question}</p>
      <div className={styles["answer-container"]}>
        {questions[currentCardIndex].answers.map((answer) => {
          return (
            <div key={answer.text}>
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
          );
        })}

        {console.log("selected answer", selectedAnswer)}
        <div className={styles["button-container"]}>
          <button onClick={handleBackClick} disabled={currentCardIndex === 0}>
            Prev
          </button>

          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default JsQuestionCard;
