import React from "react";

const Button = ({ disabled = false, onClick, text }) => {
  return <button disabled={disabled} onClick={onClick}>{text}</button>;
};

export default Button;
