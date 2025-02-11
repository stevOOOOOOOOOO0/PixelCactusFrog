import "../App.css";

function WordCard(props: { word: string }) {
  return (
    <div className="topBottomCardContainer">
      <div className="imageWrapper flippedOrientation">
        <p className="cardText">{props.word}</p>
      </div>
      <div className="imageWrapper">
        <p className="cardText">{props.word}</p>
      </div>
    </div>
  );
}

export default WordCard;
