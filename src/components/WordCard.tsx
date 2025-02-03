import { generateSlug } from "random-word-slugs";
import imageToAdd from "../assets/Card-Background.svg";
import "../App.css";

function WordCard() {
  const word = generateSlug(1, { partsOfSpeech: ["noun"] });

  return (
    <div className="imageWrapper">
      <img src={imageToAdd} alt="..." width={210} />
      <p className="cardText">{word}</p>
      <p className="flippedCardText">{word}</p>
    </div>
  );
}

export default WordCard;
