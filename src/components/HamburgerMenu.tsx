import "./HamburgerMenu.css";
import { useState } from "react";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  if (open === true) {
    return (
      <>
        <button
          className="HamburgerMenu"
          onClick={() => {
            setOpen(!open);
            setRulesOpen(false);
          }}
        >
          ☰
        </button>

        {!rulesOpen && (
          <div className="settingsMenu">
            <button className="menuButton" onClick={() => setRulesOpen(true)}>
              Rules
            </button>
          </div>
        )}
        {rulesOpen && (
          <div className="rulesPopup">
            <div className="card-body">
              <button className="backArrow" onClick={() => setRulesOpen(false)}>
                close
              </button>
              <h2>How to Play</h2>
              <p className="card-text">GOAL: create categories for points.</p>
              <p className="card-text">3 words will show on screen.</p>
              <p className="card-text">
                Race to see who can come up with a category that fits all three
                words.
              </p>
              <p className="card-text">Say it out loud.</p>
              <p className="card-text">
                If everyone agrees give yourself a point.
              </p>
              <p className="card-text">Repeat.</p>
              <p className="card-text">
                Tip: the whackier your categories the more fun the game will be.
              </p>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <button className="HamburgerMenu" onClick={() => setOpen((open) => true)}>
        ☰
      </button>
    );
  }
}

export default HamburgerMenu;
