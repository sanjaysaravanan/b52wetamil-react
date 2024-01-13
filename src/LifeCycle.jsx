import { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ title }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleCompletion = () => {
    if (isCompleted) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        onClick={handleCompletion}
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
      <span style={{ marginLeft: "16px" }}>
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string,
};

const LifeCycle = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <button onClick={handleClick}>
        {show ? "Unmount" : "Mount"} the Component
      </button>
      {show && <Todo title={"Dance"} />}
    </>
  );
};

export default LifeCycle;
