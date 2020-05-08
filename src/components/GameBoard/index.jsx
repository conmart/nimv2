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

  const playerStyles = cx("playerTurn", { player2: !player1Turn });

  return (
    <div>
      {gameOver ? (
        <div>
          <h3>Game Over</h3>
          <h5>Player {currentPlayer} Wins!</h5>
        </div>
      ) : (
        <Fragment>
          <div className={playerStyles}>Player {currentPlayer}'s turn</div>
          <div className="columnsContainer">{columns}</div>
          <Button
            big
            nim
            disabled={invalidTurn}
            onClick={takeTurn}
            text="Nim!"
          />
        </Fragment>
      )}
    </div>
  );
};

export default GameBoard;
