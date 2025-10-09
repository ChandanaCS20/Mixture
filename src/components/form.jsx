import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter YOur Name"
      />
      <p>Hello,{name}</p>
    </form>
  );
}

export default Form;
