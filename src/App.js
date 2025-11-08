import React, { useState } from "react";
import Todo from "./components/todo";
import Greeting from "./components/greeting.jsx";
import Counter from "./components/counter.jsx";
import Buttonclick from "./components/buttonclick.jsx";
import Status from "./components/status.jsx";
import Fruitlist from "./components/fruitlist.jsx";
import Form from "./components/form.jsx";
import Timer from "./components/timer.jsx";
import UserList from "./components/userlist.jsx";
import ToggleMessage from "./components/ToggleMessage.jsx";
import Shubh from "./React Basics/JSX.jsx";
import LifecycleDemo from "./React Basics/LifecycleDemo";
import EffectTimer from "./React Basics/useEffectHook.jsx";
import UserListt from "./React Basics/hooks.jsx";
import UserForm from "./ReactRouterForms/UserForm.jsx";
import { Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(true);
  const names = [
    "Chandu",
    "UJWAL",
    "Jaanu",
    "Buggi",
    "Veeru",
    "channutamma",
    "chinnuma",
    "jyoti",
  ];

  return (
    <>
      <Link to="/state" style={{ color: "maroon", fontWeight: "bold" }}>
        Go to State Management App →
      </Link>
      <div className="App">
        {names.map((name, index) => (
          <Todo key={index} name={name} />
        ))}
        <Greeting />
        <Counter />
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <Buttonclick />
        </div>
        <div>
          <Status />
        </div>
        <div>
          <Fruitlist />
        </div>
        <div>
          <Form />
        </div>
        <Timer />
        <UserList />
        <ToggleMessage />
        <Shubh user="Chandanaaaaa" />
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Component
        </button>
        {show && <LifecycleDemo />}
        <EffectTimer />
        <UserListt />
        <UserForm />
      </div>
    </>
  );
}

export default App;
