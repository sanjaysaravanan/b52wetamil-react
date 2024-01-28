import { useReducer } from "react";
import "./Reducer.css";

// Reducer Function: a function which take a single instructions and manipulate the state variable

// Reducer
const movements = (state = {}, action) => {
  switch (action) {
    case "top":
      return {
        ...state,
        top: state.top - 100,
      };
    case "bottom":
      return {
        ...state,
        top: state.top + 100,
      };
    case "left":
      return {
        ...state,
        left: state.left - 100,
      };
    case "right":
      return {
        ...state,
        left: state.left + 100,
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(movements, { top: 100, left: 100 });

  return (
    <div style={{ textAlign: "center" }}>
      <div className="game-container">
        <div
          className="box"
          style={{ top: `${state.top}px`, left: `${state.left}px` }}
        ></div>
      </div>
      <div className="arrows">
        <button className="arrow arrow-left" onClick={() => dispatch("left")}>
          Left
        </button>
        <button className="arrow arrow-top" onClick={() => dispatch("top")}>
          Top
        </button>
        <button className="arrow arrow-right" onClick={() => dispatch("right")}>
          Right
        </button>
        <button
          className="arrow arrow-bottom"
          onClick={() => dispatch("bottom")}
        >
          Bottom
        </button>
      </div>
    </div>
  );
};

export default Reducer;
