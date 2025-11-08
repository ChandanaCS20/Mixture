// src/StateManagementApp/components/Counter.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSilce";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
