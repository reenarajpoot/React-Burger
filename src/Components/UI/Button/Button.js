import React from "react";
import cssObj from "./Button.module.css";
const button = (props) => {
  return (
    <button
      className={[cssObj.Button, cssObj[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
