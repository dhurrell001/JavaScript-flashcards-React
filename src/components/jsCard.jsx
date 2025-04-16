import React from "react";
import styles from "./jsCard.module.css";

function JsCard({ question, content, setCurrentCardIndex, currentCardIndex }) {
  const [isClicked, setIsClicked] = React.useState(false);

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
  return (
    <div className={styles.card}>
      {/* <h2>Question {question}</h2> */}
      <div className={styles["question-container"]}>
        {isClicked ? <p>{content}</p> : <p>{question}</p>}
      </div>

      <div className={styles["button-container"]}>
        <button onClick={handleBackClick} disabled={currentCardIndex === 0}>
          Prev
        </button>
        <button onClick={() => setIsClicked((prevState) => !prevState)}>
          {isClicked ? "Hide Answer" : "Show Answer"}
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default JsCard;
