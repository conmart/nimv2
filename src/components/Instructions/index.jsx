import React from "react";

import { useStateValue } from "../../state";

import Button from "../Button";

import "./styles.css";

const Instructions = () => {
  const dispatch = useStateValue()[1];

  const closeInstructions = () => {
    dispatch({ type: "INSTRUCTIONS", payload: false })
  }

  return (
    <div className="instructionsContainer">
      <span className="close" onClick={closeInstructions} />
      <h4>Overview</h4>
      <p>
        Players take turns removing dots from the board. Whoever removes the
        last dot loses!
      </p>
      <h4>Taking Your Turn</h4>
      <p>
        On your turn you must select at least one dot, and can then select
        as many additional dots as you would like as long as they are all part of
        the same column. Once you have your dots selected, press "Nim!" to
        remove them from the board.
      </p>
      <p>
        <a href="https://en.wikipedia.org/wiki/Nim">
          Check out the wikipedia page
        </a>{" "}
        for more info and good luck!
      </p>
      <Button onClick={closeInstructions} text="Back to Game" />
    </div>
  );
};

export default Instructions;
