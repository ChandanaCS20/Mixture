import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import StateManagementApp from "./StateManagementApp/App.jsx"; // ✅ make sure the path matches

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* main mixture app */}
      <Route path="/" element={<App />} />

      {/* state management sub-app */}
      <Route path="/state" element={<StateManagementApp />} />
    </Routes>
  </BrowserRouter>
);
