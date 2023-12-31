import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./App.jsx";
import Cards from "./Cards.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
    <Cards />
  </React.StrictMode>
);
