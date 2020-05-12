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
  const dotsSelected = remainingDots.flat().filter(dot => dot).length;
  const currColumnActive = remainingDots[column].filter(dot => dot).length;
  const inactiveColumn = dotsSelected && !currColumnActive;

  const dotClicked = () => {
    if (!inactiveColumn) {
      const newRemainingDots = remainingDots.slice()
      newRemainingDots[column][dotIndex] = !remainingDots[column][dotIndex];
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
