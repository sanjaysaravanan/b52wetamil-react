import React from "react";
import ReactDOM from "react-dom/client";
// import MainApp from "./App.jsx";

import "./index.css";

import AppRoutes from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Students /> */}
    {/* <Counter initialCount={99} /> */}
    {/* <ToDoList initialTodos={["Dance", "Sing", "Walk"]} /> */}
    {/* <ToDoListAdvance /> */}
    {/* <LifeCycle /> */}
    {/* <LifeCycleTwo /> */}
    <AppRoutes />
  </React.StrictMode>
);
