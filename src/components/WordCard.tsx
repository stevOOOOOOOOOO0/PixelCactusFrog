import { generateSlug } from "random-word-slugs";
//import { useState } from "react";
import imageToAdd from "../assets/Card-Background.svg";
import "../App.css";

function WordCard() {
  const word = generateSlug(1, { partsOfSpeech: ["noun"] });
  //const [word, setWords] = useState("START");

  return (
    <div className="imageWrapper">
      <img
        className="imageDiv"
        src={imageToAdd}
        alt="..."
        //onClick={() => setWords((word) => generateSlug(1))}
      />
      <p className="cardText">{word}</p>
      <p className="flippedCardText">{word}</p>
    </div>
  );
}

export default WordCard;
