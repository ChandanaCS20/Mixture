import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeContext } from "./context/ThemeContext";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import UserCard from "./components/UserCard";

function App() {
  // local theme state
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // ✅ Wrap children inside ThemeContext.Provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Provider store={store}>
        <div
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#222",
            color: theme === "light" ? "#000" : "#fff",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <h2>🌈 State Management Demo</h2>
          <ThemeToggle />
          <Counter />
          <UserCard />
        </div>
      </Provider>
    </ThemeContext.Provider>
  );
}

export default App;
