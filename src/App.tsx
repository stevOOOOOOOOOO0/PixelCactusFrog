import { useState } from "react";
import wordCard from "./components/wordCard";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  return (
    <>
      <div>
        <span>{wordCard()}</span>
        <span>{wordCard()}</span>
        <span>{wordCard()}</span>
      </div>
      <div className="card">
        <button
          onClick={() => setCount1((count1) => count1 + 1)}
          className="playerButton"
        >
          Player 1: {count1}
        </button>
        <button
          onClick={() => setCount2((count2) => count2 + 1)}
          className="playerButton"
        >
          Player 2: {count2}
        </button>
        <button
          onClick={() => setCount3((count3) => count3 + 1)}
          className="playerButton"
        >
          Player 3: {count3}
        </button>
        <button
          onClick={() => setCount4((count4) => count4 + 1)}
          className="playerButton"
        >
          Player 4: {count4}
        </button>
      </div>
    </>
  );
}

export default App;
