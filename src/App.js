import Todo from "./components/todo";
import Greeting from "./components/greeting.jsx";
import Counter from "./components/counter.jsx";
import Buttonclick from "./components/buttonclick.jsx";
import Status from "./components/status.jsx";
import Fruitlist from "./components/fruitlist.jsx";
import Form from "./components/form.jsx";
import Timer from "./components/timer.jsx";
import UserList from "./components/userlist.jsx";

function App() {
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
    </div>
  );
}

export default App;
