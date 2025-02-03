import { useState } from "react";
import WordCard from "./components/WordCard";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  return (
    <>
      <div className="flippedOrientationButtons">
        <button
          onClick={() => setCount3((count3) => count3 + 1)}
          className="playerButton"
        >
          <text className="buttonText">Player 3: {count3} </text>
        </button>
        <button
          onClick={() => setCount4((count4) => count4 + 1)}
          className="playerButton"
        >
          <text className="buttonText">Player 4: {count4} </text>
        </button>
      </div>
      <div className="cardContainer">
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => setCount1((count1) => count1 + 1)}
          className="playerButton"
        >
          <text className="buttonText">Player 1: {count1} </text>
        </button>
        <button
          onClick={() => setCount2((count2) => count2 + 1)}
          className="playerButton"
        >
          <text className="buttonText">Player 2: {count2} </text>
        </button>
      </div>
    </>
  );
}

export default App;
