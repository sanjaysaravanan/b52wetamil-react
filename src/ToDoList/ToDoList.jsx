import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToDoList.module.css";

const Todo = ({ title, deleteTodo }) => {
  return (
    <div className={styles.todo}>
      <h1>{title}</h1>
      <span onClick={() => deleteTodo(title)}>
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string,
  deleteTodo: PropTypes.func,
};

const ToDoList = ({ initialTodos = [] }) => {
  // state variable used to handle the text in the input field
  const [inpText, setInpText] = useState(initialTodos);

  // state variable used to store the todos created by the user
  const [todos, setTodos] = useState([]);

  const handleInpChange = (e) => {
    console.log(e.target.value);
    setInpText(e.target.value);
  };

  const addTodo = () => {
    // change the state variable
    setTodos([...todos, inpText]);
    setInpText("");
  };

  const deleteTodo = (curTodo) => {
    // set the todos expect this todo
    setTodos(todos.filter((todo) => curTodo !== todo));
  };

  return (
    <div className={styles.root}>
      {console.log(todos)}
      <input onChange={handleInpChange} value={inpText} />
      <button type="button" onClick={addTodo}>
        Submit
      </button>
      {todos.map((todo) => (
        <Todo title={todo} deleteTodo={deleteTodo} key={todo} />
      ))}
    </div>
  );
};

ToDoList.propTypes = {
  initialTodos: PropTypes.arrayOf({}),
};

export default ToDoList;
