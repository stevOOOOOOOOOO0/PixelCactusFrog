import "./HamburgerMenu.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  if (open === true) {
    return (
      <>
        {!rulesOpen && (
          <div className="settingsMenu">
            <ul className="list-group list-group-flush">
              <button
                className="list-group-item"
                onClick={() => setRulesOpen(true)}
              >
                <text className="buttonText">Rules </text>
              </button>
              <button className="list-group-item">
                <text className="buttonText">
                  Card Filters -not functioning-
                </text>
              </button>
              <button className="list-group-item">
                <text className="buttonText">
                  Next Menu Item -not functioning-
                </text>
              </button>
            </ul>
            <button
              className={"HamburgerMenu HamburgerMenuInverted"}
              onClick={() => {
                setOpen(!open);
                setRulesOpen(false);
              }}
            >
              ☰
            </button>
          </div>
        )}
        {rulesOpen && (
          <div className="rulesPopup">
            <div className="card-body">
              <button
                className="HamburgerMenu HamburgerMenuInverted"
                onClick={() => setRulesOpen(false)}
              >
                ↩
              </button>
              <h2 className="header-text">How to Play</h2>
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
  } else if (!open) {
    return (
      <button
        className="HamburgerMenu"
        onClick={() => {
          setOpen(!open);
        }}
      >
        ☰
      </button>
    );
  }
}

export default HamburgerMenu;
