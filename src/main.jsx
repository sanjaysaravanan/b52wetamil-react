import React from "react";
import ReactDOM from "react-dom/client";
// import MainApp from "./App.jsx";
import Students from "./Students/Students";
// import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Students /> */}
    {/* <Counter initialCount={99} /> */}
    <ToDoList />
  </React.StrictMode>
);
