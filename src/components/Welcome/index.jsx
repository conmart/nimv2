import React from "react";
import { useStateValue } from "../../state";

import GameBoard from "../GameBoard";
import Button from "../Button";

const Welcome = () => {
  const [{ activeGame }, dispatch] = useStateValue();

  const newGame = () => {
    dispatch({ type: "NEW_GAME", payload: true });
  };

  const instructions = () => {
    // TODO: write instructions
    console.log("instructions");
  };

  return (
    <div>
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
