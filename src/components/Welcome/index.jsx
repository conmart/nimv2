import React from "react";
import { useStateValue } from "../../state";

import Button from "./WelcomeButton";

const Welcome = () => {
  const [{ welcomeScreen }, dispatch] = useStateValue();

  const newGame = () => {
    dispatch({ type: "NEW_GAME", payload: false });
  };

  const instructions = () => {
    // TODO: write instructions
    console.log("instructions");
  };

  console.log(welcomeScreen);
  return (
    <div>
      {welcomeScreen && (
        <div>
          <h2>Welcome to Nim</h2>
          <h5>A Mathematical Game of Strategy</h5>
          <div>
            <Button onClick={newGame} text="New Game" />
            <Button onClick={instructions} text="Instructions" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
