import "./App.css";
import React from "react";
import JsCard from "./components/jsCard";
import Header from "./components/header";
import cardData from "./data/cardData";
import ScoreBoard from "./components/scoreBoard";
import AboutText from "./components/aboutText";
import UsefulLinks from "./components/usefulLinks";
function App() {
  const [cards, setCards] = React.useState(cardData);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const currentCard = cards[currentCardIndex];
  return (
    <div className="main-container">
      <Header />

      <JsCard
        question={currentCard.question}
        content={currentCard.answer}
        setCurrentCardIndex={setCurrentCardIndex}
        currentCardIndex={currentCardIndex}
      />
      <div className="container">
        <AboutText />
        <UsefulLinks />
      </div>
    </div>
  );
}

export default App;
