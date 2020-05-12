import React from "react";
import classNames from "classnames/bind";

import { useStateValue } from "../../../../state";

import styles from "./styles.css";

const cx = classNames.bind(styles);

function Dot({ column, dotIndex }) {
  const [
    {
      gameBoard: { player1Turn, remainingDots },
    },
    dispatch,
  ] = useStateValue();

  const activeDot = remainingDots[column][dotIndex];
  const someDotSelected = remainingDots.flat().filter((dot) => dot).length;
  const currColumnActive = remainingDots[column].filter((dot) => dot).length;
  const inactiveColumn = someDotSelected && !currColumnActive;

  const dotClicked = () => {
    if (!inactiveColumn) {
      const newRemainingDots = remainingDots.slice();
      const newDotColumn = remainingDots[column].slice();
      newDotColumn[dotIndex] = !newDotColumn[dotIndex];
      newRemainingDots[column] = newDotColumn;
      // this function was much more concise but javascript's shallow copy of nested arrays was causing issues
      dispatch({ type: "DOT_CLICKED", payload: newRemainingDots });
    }
  };

  const containerStyle = cx("dotContainer", { inactive: inactiveColumn });
  const dotStyle = cx("dot", {
    unavailable: inactiveColumn,
    selected: activeDot,
    player2: !player1Turn,
  });

  return (
    <div className={containerStyle} onClick={dotClicked}>
      <span className={dotStyle} />
    </div>
  );
}

export default Dot;
