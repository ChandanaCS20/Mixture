// src/StateManagementApp/components/UserCard.jsx
import { useSelector } from "react-redux";

function UserCard() {
  const user = useSelector((state) => state.counter.user);

  return (
    <div style={{ marginTop: "10px" }}>
      <h4>User: {user}</h4>
    </div>
  );
}

export default UserCard;
