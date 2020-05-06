import React from "react";
import { useStateValue } from "../../state";

import DotColumn from "./DotColumn";
import Button from "../Button";

import "./styles.css";

const GameBoard = () => {
  const [
    {
      gameBoard: { dotsSelected, player1Turn, remainingDots, selectedColumn },
    },
    dispatch,
  ] = useStateValue();

  const takeTurn = () => {
    const newRemainingDots = remainingDots.slice();
    const newDotValue = remainingDots[selectedColumn] - dotsSelected;
    newRemainingDots[selectedColumn] = newDotValue;
    const newGameBoard = {
      dotsSelected: 0,
      player1Turn: !player1Turn,
      remainingDots: newRemainingDots,
      selectedColumn: null,
    };
    dispatch({ type: "TAKE_TURN", payload: newGameBoard })
  };

  const columns = remainingDots.map((column, index) => (
    <DotColumn index={index} numberOfDots={column} key={index} />
  ));

  const invalidTurn = !dotsSelected || !selectedColumn;

  return (
    <div>
      <div className="columnsContainer">{columns}</div>
      <Button disabled={invalidTurn} onClick={takeTurn} text="Nim!" />
    </div>
  );
};

export default GameBoard;
