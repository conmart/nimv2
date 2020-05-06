import React, { useState } from "react";
import { useStateValue } from "../../../../state";

import "./styles.css";

function Dot({ column }) {
  const [active, toggleActive] = useState(false);
  const [
    {
      gameBoard: { dotsSelected, selectedColumn },
    },
    dispatch,
  ] = useStateValue();

  // console.log(dotsSelected, selectedColumn);

  const dotClicked = () => {
    if (!selectedColumn || selectedColumn === column) {
      const newDotCount = active ? dotsSelected - 1 : dotsSelected + 1;
      const newSelectedColumn = newDotCount > 0 ? column : null;
      const payload = {
        dotsSelected: newDotCount,
        selectedColumn: newSelectedColumn,
      };
      dispatch({ type: "DOT_CLICKED", payload });
      toggleActive(!active);
    }
  };

  const dotStyle = active ? "dot selected" : "dot";

  return (
    <div className="dotContainer" onClick={dotClicked}>
      <span className={dotStyle} />
    </div>
  );
}

export default Dot;
