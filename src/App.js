import "./App.css";
import React from "react";
import JsCard from "./components/jsCard";
import Header from "./components/header";
import cardData from "./data/cardData";
import jsIntermediate from "./data/cardDataIntermediate";
import jsHard from "./data/cardDataHard";
import ScoreBoard from "./components/scoreBoard";
import AboutText from "./components/aboutText";
import UsefulLinks from "./components/usefulLinks";
import DifficultyLevel from "./components/difficultyLevel";
function App() {
  const [cards, setCards] = React.useState(cardData);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const currentCard = cards[currentCardIndex];
  const [difficultyLevel, setDifficultyLevel] = React.useState("easy");

  React.useEffect(() => {
    if (difficultyLevel === "easy") {
      setCards(cardData);
    } else if (difficultyLevel === "medium") {
      setCards(jsIntermediate);
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
      <div className="top-container">
        <DifficultyLevel setDifficultyLevel={setDifficultyLevel} />
        <JsCard
          question={currentCard.question}
          content={currentCard.answer}
          setCurrentCardIndex={setCurrentCardIndex}
          currentCardIndex={currentCardIndex}
        />
        {console.log(cards)}
      </div>
      <div className="container">
        <AboutText />
        <UsefulLinks />
      </div>
    </div>
  );
}

export default App;
