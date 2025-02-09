import { generateSlug } from "random-word-slugs";
import "../App.css";

function WordCard() {
  const word = generateSlug(1, { partsOfSpeech: ["noun"] });

  return (
    <div className="topBottomCardContainer">
      <div className="imageWrapper flippedOrientation">
        <p className="cardText">{word}</p>
      </div>
      <div className="imageWrapper">
        <p className="cardText">{word}</p>
      </div>
    </div>
  );
}

export default WordCard;
