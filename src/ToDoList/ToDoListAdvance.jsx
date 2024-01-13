import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToDoList.module.css";

const Todo = ({ title, isCompleted, completeTodo, deleteTodo }) => {
  return (
    <div className={styles.todo}>
      {/* <input
        type="checkbox"
        checked={isCompleted}
        style={{ transform: "scale(2)", marginRight: "16px" }}
        onChange={() => completeTodo(title)}
      /> */}
      <span
        onClick={() => completeTodo(title)}
        style={{ transform: "scale(1.5)", marginRight: "16px" }}
      >
        {isCompleted ? (
          <i className="fa-regular fa-circle-check"></i>
        ) : (
          <i className="fa-regular fa-circle"></i>
        )}
      </span>
      {isCompleted ? (
        <s style={{ color: "#ccc" }}>
          <h1>{title}</h1>
        </s>
      ) : (
        <h1>{title}</h1>
      )}
      <span onClick={() => deleteTodo(title)}>
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string,
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  isCompleted: PropTypes.bool,
};

// Todo
// title: string // do not add same todos twice or more
// isCompleted: boolean

const ToDoListAdvance = ({ initialTodos = [] }) => {
  // state variable used to handle the text in the input field
  const [inpText, setInpText] = useState("");

  // state variable used to store the todos created by the user
  const [todos, setTodos] = useState(initialTodos);

  const handleInpChange = (e) => {
    console.log(e.target.value);
    setInpText(e.target.value);
  };

  const addTodo = () => {
    // change the state variable
    setTodos([...todos, { title: inpText, isCompleted: false }]);
    setInpText("");
  };

  const deleteTodo = (curTitle) => {
    // set the todos expect this todo
    setTodos(todos.filter((todo) => todo.title !== curTitle));
  };

  const completeTodo = (curTitle) => {
    // change the status isCompleted to true
    // set the new todos state variable accordingly
    // find the todo which is getting completed
    const oldTodos = [...todos];
    const curTodoIndex = oldTodos.findIndex((todo) => todo.title === curTitle);

    const curTodo = oldTodos[curTodoIndex];

    if (curTodo.isCompleted) {
      curTodo.isCompleted = false;
    } else {
      curTodo.isCompleted = true;
    }

    const newTodos = [...todos];

    newTodos[curTodoIndex] = curTodo;

    setTodos(newTodos);
  };

  return (
    <div className={styles.root}>
      {console.log(todos)}
      <input onChange={handleInpChange} value={inpText} />
      <button type="button" onClick={addTodo}>
        Submit
      </button>
      {todos.map((todo) => (
        <Todo
          {...todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          key={todo.title}
        />
      ))}
    </div>
  );
};

ToDoListAdvance.propTypes = {
  initialTodos: PropTypes.arrayOf({}),
};

export default ToDoListAdvance;
