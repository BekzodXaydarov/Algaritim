import React from "react";

const Button = ({ text, type, style, OnFunction }) => {
  return (
    <button
      type={type === "sumbit" ? "sumbit" : "button"}
      className={`${type === "btn" ? "btn" : "sumbit"}`}
      style={style}
      onClick={OnFunction}
    >
      {text}
    </button>
  );
};

export default Button;
