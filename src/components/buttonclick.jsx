import React from "react";

function Buttonclick() {
  const handleClick = () => {
    console.log("Button was Clicked!");
    alert("Button Clicked!");
  };
  return <button onClick={handleClick}>Click Me</button>;
}

export default Buttonclick;
