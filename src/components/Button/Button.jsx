import React, { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  let className = "btn";
  let text = "";

  if (isOn) {
    className = "btn on";
    text = "On";
  } else {
    className = "btn off";
    text = "Off";
  }

  return (
    <div>
      <button className={className} onClick={handleClick}>
        <p>{text}</p>
        <i className="fa-solid fa-circle"></i>
      </button>
    </div>
  );
};
