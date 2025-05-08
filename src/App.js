import "./App.css";
import React from "react";
import JsCard from "./components/jsCard";
import Header from "./components/header";
import cardData from "./data/cardData";
import jsIntermediate from "./data/cardDataIntermediate";
import jsHard from "./data/cardDataHard";

import AboutText from "./components/aboutText";
import UsefulLinks from "./components/usefulLinks";
import DifficultyLevel from "./components/difficultyLevel";
import JsQuestionCard from "./components/jsQuestionCard";
import QuizOrLearnButtons from "./components/quizOrLearnButtons";
import MultipleChoiceQuestions from "./data/multipleChoiceQuestions";
import MultipleChoiceQuestionsIntermediate from "./data/multipleChoiceQuestionIntermediate";
import QuizScoreCard from "./components/quizScoreCard";

function App() {
  const [cards, setCards] = React.useState(cardData);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [questionCard, setQuestionCard] = React.useState(
    MultipleChoiceQuestions
  );
  const currentCard = cards[currentCardIndex];
  const [difficultyLevel, setDifficultyLevel] = React.useState("easy");
  const [isLearn, setIsLearn] = React.useState(true);
  const [isQuiz, setIsQuiz] = React.useState(false);
  const [isQuizSubmitted, setIsQuizSubmitted] = React.useState(false);
  const [quizResult, setQuizResult] = React.useState(0);

  React.useEffect(() => {
    if (difficultyLevel === "easy") {
      setCards(cardData);
      setQuestionCard(MultipleChoiceQuestions);
    } else if (difficultyLevel === "medium") {
      setCards(jsIntermediate);
      setQuestionCard(MultipleChoiceQuestionsIntermediate);
    }
    if (difficultyLevel === "hard") {
      setCards(jsHard);
    }
    // Reset to first card when difficulty changes
    setCurrentCardIndex(0);
  }, [difficultyLevel]);
  return (
    <div className="main-container">
      <Header />
      <QuizOrLearnButtons setIsLearn={setIsLearn} setIsQuiz={setIsQuiz} />
      {isLearn ? (
        <>
          {" "}
          <div className="top-container">
            <DifficultyLevel
              setDifficultyLevel={setDifficultyLevel}
              difficultyLevel={difficultyLevel}
            />
            <JsCard
              question={currentCard.question}
              content={currentCard.answer}
              setCurrentCardIndex={setCurrentCardIndex}
              currentCardIndex={currentCardIndex}
              cards={cards}
            />

            {console.log(cards)}
          </div>
        </>
      ) : isQuizSubmitted ? (
        <div className="top-container">
          <QuizScoreCard
            score={quizResult}
            totalQuestions={questionCard.length}
            setIsQuizSubmitted={setIsQuizSubmitted}
          />
        </div>
      ) : (
        <>
          <div className="top-container">
            <DifficultyLevel
              setDifficultyLevel={setDifficultyLevel}
              difficultyLevel={difficultyLevel}
            />
            <JsQuestionCard
              questions={questionCard}
              setIsQuizSubmitted={setIsQuizSubmitted}
              setQuizResult={setQuizResult}
            />
          </div>
        </>
      )}

      <div className="container">
        <AboutText />
        <UsefulLinks />
      </div>
    </div>
  );
}

export default App;
