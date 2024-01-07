import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialCount = 0 }) => {
  // let count = 0;

  const [count, setCount] = useState(initialCount);

  // normal function without state
  // const handleInc = () => {
  //   count++;
  //   console.log(count);
  // };

  // const handleDec = () => {
  //   count--;
  // };

  // Function which handles the state change
  const handleInc = () => {
    // count --> 0
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {console.log("rendering")}
      <h1>Count</h1>
      <h3>{count}</h3>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number,
};

export default Counter;
