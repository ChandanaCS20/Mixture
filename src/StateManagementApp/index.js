// src/StateManagementApp/index.js (Entry point for mini app)
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";

function StateManagementApp() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
}

export default StateManagementApp;
