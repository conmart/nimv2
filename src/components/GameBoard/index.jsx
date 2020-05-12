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
      gameBoard: { player1Turn, remainingDots },
    },
    dispatch,
  ] = useStateValue();

  const takeTurn = () => {
    const newRemainingDots = remainingDots.map((column) =>
      column.filter((dot) => !dot)
    );
    const newGameBoard = {
      player1Turn: !player1Turn,
      remainingDots: newRemainingDots,
    };
    dispatch({ type: "TAKE_TURN", payload: newGameBoard });
  };

  const columns = remainingDots.map((column, index) => (
    <DotColumn index={index} numberOfDots={column.length} key={index} />
  ));

  const invalidTurn = !remainingDots.flat().filter((dot) => dot).length;
  const currentPlayer = player1Turn ? 1 : 2;
  const gameOver = !remainingDots.flat().length;

  const gameStateStyles = cx("gameState", { player2: !player1Turn, gameOver });
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
