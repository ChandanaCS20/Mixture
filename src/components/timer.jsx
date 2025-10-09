import React, { useEffect } from "react";

function Timer() {
  useEffect(() => {
    console.log("Timer component mounted");
  }, []);
  return <p>Check the console!</p>;
}

export default Timer;
