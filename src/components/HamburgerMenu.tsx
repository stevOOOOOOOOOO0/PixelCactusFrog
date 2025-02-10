import "./HamburgerMenu.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PixelFrog from "../assets/PixelCactusFrog.svg";
import HamburgerIcon from "../assets/Hamburger.svg";
import BackArrowIcon from "../assets/Back Arrow.svg";
import closeIcon from "../assets/Close.svg";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  if (open === true) {
    return (
      <>
        {!rulesOpen && (
          <>
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
                    Game Modes -not functioning-
                  </text>
                </button>
              </ul>
            </div>
            <img
              className="HamburgerMenu"
              src={closeIcon}
              alt="..."
              onClick={() => {
                setOpen(!open);
                setRulesOpen(false);
              }}
            ></img>
          </>
        )}
        {rulesOpen && (
          <div className="rulesPopup">
            <div className="card-body">
              <img
                className="HamburgerMenu"
                src={BackArrowIcon}
                alt="..."
                onClick={() => setRulesOpen(false)}
              ></img>
              <h2 className="header-text">How to Play</h2>
              <p className="secondaryText">
                GOAL: create categories for points.
              </p>
              <p className="secondaryText">3 words will show on screen.</p>
              <p className="secondaryText">
                Race to see who can come up with a category that fits all three
                words.
              </p>
              <p className="secondaryText">Say it out loud.</p>
              <p className="secondaryText">
                If everyone agrees give yourself a point.
              </p>
              <p className="secondaryText">Repeat.</p>
              <p className="secondaryText">
                Tip: the whackier your categories the more fun the game will be.
              </p>
              <img className="imageDiv" src={PixelFrog} alt="..." />
            </div>
          </div>
        )}
      </>
    );
  } else if (!open) {
    return (
      <img
        className="HamburgerMenu"
        src={HamburgerIcon}
        alt="..."
        onClick={() => {
          setOpen(!open);
        }}
      />
    );
  }
}

export default HamburgerMenu;
