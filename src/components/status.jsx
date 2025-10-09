import React, { useState } from "react";

function Status() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <button
        style={{ color: "Highlight" }}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Log out" : "Log In"}
      </button>
      {isLoggedIn ? <p> Welcom back!</p> : <p>Please log in.</p>}
    </>
  );
}

export default Status;
