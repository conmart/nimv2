import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { useStateValue } from "../../../../state";

import styles from "./styles.css";

const cx = classNames.bind(styles);

function Dot({ column }) {
  const [activeDot, toggleActive] = useState(false);
  const [
    {
      gameBoard: { dotsSelected, selectedColumn },
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    if (selectedColumn === null && activeDot) {
      toggleActive(false);
    }
  });

  const inactiveColumn = selectedColumn && selectedColumn !== column;

  const dotClicked = () => {
    if (!inactiveColumn) {
      const newDotCount = activeDot ? dotsSelected - 1 : dotsSelected + 1;
      const newSelectedColumn = newDotCount > 0 ? column : null;
      const payload = {
        dotsSelected: newDotCount,
        selectedColumn: newSelectedColumn,
      };
      dispatch({ type: "DOT_CLICKED", payload });
      toggleActive(!activeDot);
    }
  };

  const containerStyle = cx("dotContainer", { inactive: inactiveColumn });
  const dotStyle = cx("dot", {
    unavailable: inactiveColumn,
    selected: activeDot,
  });

  return (
    <div className={containerStyle} onClick={dotClicked}>
      <span className={dotStyle} />
    </div>
  );
}

export default Dot;
