import React from "react";
import { useStateValue } from "../../state";

import DotColumn from "./DotColumn"
import Button from "../Button"

import "./styles.css";

const GameBoard = () => {
  const [{ gameBoard }, dispatch] = useStateValue();

  const takeTurn = () => {
    console.log('take turn')
  }

  const columns = gameBoard.columns.map((column, index) => (
    <DotColumn index={index} numberOfDots={column} />
  ));

  return (
    <div>
      <div className="columnsContainer">{columns}</div>
      <Button onClick={takeTurn} text="Nim!" />
    </div>
  );  
};

export default GameBoard;
