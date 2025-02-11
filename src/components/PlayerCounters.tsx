import { useEffect, useState } from "react";

function PlayerCounters(props: { onChange: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => props.onChange(), [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        borderTopLeftRadius: ".25em",
        borderTopRightRadius: ".25em",
        backgroundColor: "rgba(255, 255, 255, 1)",
        zIndex: 10,
      }}
    >
      <button
        className="playerButton"
        onClick={() => setCount((count) => count - 1)}
      >
        <text className="secondaryText">-</text>
      </button>
      <text
        style={{
          minWidth: "3em",
          color: "black",
          fontFamily: "Permanent Marker",
        }}
        className="secondaryText"
      >
        {count}
      </text>
      <button
        className="playerButton"
        onClick={() => setCount((count) => count + 1)}
      >
        <text className="secondaryText">+</text>
      </button>
    </div>
  );
}

export default PlayerCounters;
