import React from "react";

import Dot from "./Dot";

import "./styles.css";

const DotColumn = ({ index, numberOfDots }) => {  
  const dots = [];
  for (let i = numberOfDots; i > 0; i--) {
    dots.push(<Dot column={index} dotIndex={i - 1} key={i} />);
  }

  return (
    <div className="dotColumn">
      {dots}
    </div>
  )
};

export default DotColumn;
