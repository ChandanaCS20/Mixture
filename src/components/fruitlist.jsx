import React from "react";

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
function Fruitlist() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Fruitlist;
