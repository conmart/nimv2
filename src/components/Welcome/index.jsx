import React from "react";
import { useStateValue } from "../../state";
import { initialState } from "../../state/initialState";

import GameBoard from "../GameBoard";
import Button from "../Button";

import "./styles.css";

const Welcome = () => {
  const [{ activeGame }, dispatch] = useStateValue();

  const newGame = () => {
    const payload = {
      ...initialState,
      activeGame: true,
    }
    dispatch({ type: "NEW_GAME", payload });
  };

  const instructions = () => {
    // TODO: write instructions
    console.log("instructions");
  };

  return (
    <div className="appContainer">
      <h2>Nim</h2>
      {activeGame ? <GameBoard /> : <h5>A Mathematical Game of Strategy</h5>}
      <div>
        <Button onClick={newGame} text="New Game" />
        <Button onClick={instructions} text="Instructions" />
      </div>
    </div>
  );
};

export default Welcome;
