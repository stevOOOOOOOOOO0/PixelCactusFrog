import { generateSlug } from "random-word-slugs";
import imageToAdd from "../assets/Card-Background.svg";
import "../App.css";

function WordCard() {
  const word = generateSlug(1, { partsOfSpeech: ["noun"] });
  const textSize = window.innerWidth * 0.0355;
  const textWidth = window.innerWidth / 6;

  return (
    <div className="imageWrapper">
      <img src={imageToAdd} alt="..." width={window.innerWidth / 5} />
      <p className="cardText" style={{ fontSize: textSize, width: textWidth }}>
        {word}
      </p>
      <p
        className="flippedCardText"
        style={{ fontSize: textSize, width: textWidth }}
      >
        {word}
      </p>
    </div>
  );
}

export default WordCard;
