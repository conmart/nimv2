import React from "react";

import "./styles.css";

const Button = ({ big, disabled = false, onClick, text }) => {
  const buttonModifier = big ? "big" : "small";
  const buttonStyles = `button ${buttonModifier}`;

  return (
    <button className={buttonStyles} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
