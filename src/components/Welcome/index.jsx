import React from "react";
import classNames from "classnames/bind";

import { useStateValue } from "../../state";
import { initialState } from "../../state/initialState";

import GameBoard from "../GameBoard";
import Button from "../Button";

import styles from "./styles.css";

const cx = classNames.bind(styles);

const Welcome = () => {
  const [{ activeGame }, dispatch] = useStateValue();

  const newGame = () => {
    const payload = {
      ...initialState,
      activeGame: true,
    };
    dispatch({ type: "NEW_GAME", payload });
  };

  const instructions = () => {
    // TODO: write instructions
    console.log("instructions");
  };

  const buttonsContainerStyles = cx("buttonsContainer", {
    welcomeButtons: !activeGame,
  });
  const titleStyles = cx({ "secondaryTitle": activeGame });

  return (
    <div className="appContainer">
      <h1 className={titleStyles}>Nim</h1>
      {activeGame ? <GameBoard /> : <h3>A Mathematical Game of Strategy</h3>}
      <div className={buttonsContainerStyles}>
        <Button big={!activeGame} onClick={newGame} text="New Game" />
        <Button big={!activeGame} onClick={instructions} text="How to Play" />
      </div>
    </div>
  );
};

export default Welcome;
