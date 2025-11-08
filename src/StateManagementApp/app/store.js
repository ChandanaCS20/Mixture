// src/StateManagementApp/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSilce";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
