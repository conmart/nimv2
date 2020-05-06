import React, { useState } from "react";
import { useStateValue } from "../../../../state";

import "./styles.css";

function Dot({ column }) {
  const [activeDot, toggleActive] = useState(false);
  const [
    {
      gameBoard: { dotsSelected, selectedColumn },
    },
    dispatch,
  ] = useStateValue();

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

  const containerModifier = inactiveColumn ? "inactive" : "";
  const dotModifier = inactiveColumn
    ? "unavailable"
    : activeDot
    ? "selected"
    : "";

  const containerStyle = `dotContainer ${containerModifier}`
  const dotStyle = `dot ${dotModifier}`

  return (
    <div className={containerStyle} onClick={dotClicked}>
      <span className={dotStyle} />
    </div>
  );
}

export default Dot;
