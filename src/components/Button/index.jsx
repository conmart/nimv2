import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.css";

const cx = classNames.bind(styles)

const Button = ({ big, disabled, nim, onClick, text }) => {
  const buttonStyles = cx("button", { big, disabled, nim })

  return (
    <button className={buttonStyles} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
