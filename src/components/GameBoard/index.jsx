import React, { Fragment } from "react";
import { useStateValue } from "../../state";
import classNames from "classnames/bind";

import DotColumn from "./DotColumn";
import Button from "../Button";

import styles from "./styles.css";

const cx = classNames.bind(styles);

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
    dispatch({ type: "TAKE_TURN", payload: newGameBoard });
  };

  const columns = remainingDots.map((column, index) => (
    <DotColumn index={index} numberOfDots={column} key={index} />
  ));

  const invalidTurn = !dotsSelected || selectedColumn === null;
  const currentPlayer = player1Turn ? 1 : 2;
  const gameOver = remainingDots.reduce((a, b) => a + b) === 0;

  const gameStateStyles = cx("gameState", { player2: !player1Turn, gameOver  });
  const winnerStyles = cx({ player2: !player1Turn });
  const gameStateText = gameOver
    ? "Game Over"
    : `Player ${currentPlayer}'s Turn`;

  return (
    <div className="gameBoardContainer">
      <div className={gameStateStyles}>{gameStateText}</div>
      {gameOver ? (
        <h2 className={winnerStyles}>Player {currentPlayer} Wins!</h2>
      ) : (
        <Fragment>
          <div className="columnsContainer">{columns}</div>
          <Button
            big
            disabled={invalidTurn}
            nim
            onClick={takeTurn}
            player1={player1Turn}
            text="Nim!"
          />
        </Fragment>
      )}
    </div>
  );
};

export default GameBoard;
