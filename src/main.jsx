import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./App"; // Fix: Corrected the import path

import "./index.css"; // Ensure you have a global CSS file for styling.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);
