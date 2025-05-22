import React from "react";
import "./button.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

function Button({ text, onClick = () => {}, style = {} }: ButtonProps) {
  return (
    <button className="button" onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default Button;
