import React from "react";
import myStyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={myStyle.button}
      type={props.type || "button"}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
