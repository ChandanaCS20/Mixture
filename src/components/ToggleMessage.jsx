import React, { useState } from "react";

function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <div>
      <button onClick={toggle}>
        {visible ? "Hide Message" : "Show Message"}
      </button>
      {visible && <p>🎉 Hello! This is a hidden message.</p>}
    </div>
  );
}

export default ToggleMessage;
