import { useState, useEffect } from "react";

function UserListt() {
  const [users, setUsers] = useState([]); // store fetched data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    // define an async function to fetch data
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data); // update state
      } catch (err) {
        setError(err.message); // handle errors
      } finally {
        setLoading(false); // turn off loading spinner
      }
    };

    fetchUsers(); // call the async function
  }, []); // runs only once (on mount)

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserListt;
