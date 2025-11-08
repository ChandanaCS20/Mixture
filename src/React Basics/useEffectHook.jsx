//useEffect Hook Examples ⚙️
// import { useState, useEffect } from "react";

// function Uehook() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]); // runs whenever `count` changes

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// }

// export default Uehook;

// Cleanup on Unmount (Timers or Subscriptions) 🧠
import { useEffect } from "react";

function EffectTimer() {
  useEffect(() => {
    const timer = setInterval(() => console.log("⏰ Tick"), 1000);

    // Cleanup: stop the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Run only once

  return <p>Check the console — Ticking every second!</p>;
}

export default EffectTimer;
