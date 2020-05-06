import React from "react";

import Dot from "./Dot";

import "./styles.css";

const DotColumn = ({ index, numberOfDots }) => {
  console.log(index, numberOfDots, 'column')
  
  const dots = [];
  for (let i = numberOfDots; i > 0; i--) {
    dots.push(<Dot />);
  }

  return (
    <div className="dotColumn">
      {dots}
    </div>
  )
};

export default DotColumn;
