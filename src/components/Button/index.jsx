import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.css";

const cx = classNames.bind(styles);

const Button = ({ big, disabled, nim, onClick, player1, text }) => {
  const buttonStyles = cx("button", {
    big,
    disabled,
    nim: nim && !disabled,
    player1,
  });

  return (
    <button className={buttonStyles} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
