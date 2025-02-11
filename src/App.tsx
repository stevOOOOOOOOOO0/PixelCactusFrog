import { useState } from "react";
import WordCard from "./components/WordCard";
import HamburgerMenu from "./components/HamburgerMenu";
import PlayerCounters from "./components/PlayerCounters";
import { generateSlug } from "random-word-slugs";
import "./App.css";

function App() {
  const [words, setWords] = useState(
    generateSlug(3, { partsOfSpeech: ["noun", "noun", "noun"] }).split("-")
  );

  const updateWords = () =>
    setWords(
      generateSlug(3, {
        partsOfSpeech: ["noun", "noun", "noun"],
      }).split("-")
    );

  return (
    <>
      <div className="background">
        <div className="green" />
        <div className="yellow" />
        <div className="blue" />
        <div className="pink" />
      </div>
      <div className="dashed-line" />
      <div className="flexContainer">
        <div className="buttonContainer flippedOrientationButtons">
          <PlayerCounters onChange={updateWords} />
          <PlayerCounters onChange={updateWords} />
        </div>
        <div className="cardContainer" onClick={updateWords}>
          {words.map((word, index) => (
            <WordCard word={word} key={word + index} />
          ))}
        </div>
        <div className="buttonContainer">
          <PlayerCounters onChange={updateWords} />
          <PlayerCounters onChange={updateWords} />
        </div>
      </div>
      <HamburgerMenu />
    </>
  );
}

export default App;
