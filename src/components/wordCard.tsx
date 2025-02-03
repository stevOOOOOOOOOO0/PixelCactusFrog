import { generateSlug } from "random-word-slugs";
import imageToAdd from "../assets/Card-Background.svg";
import "../App.css";

function wordCard() {
  return (
    <>
      <div className="imageWrapper">
        <img src={imageToAdd} alt="..." width={210} height={376} />
        <p className="cardText"> {generateSlug(1)} </p>
      </div>
    </>
  );
}

export default wordCard;
