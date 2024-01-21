/* eslint-disable react/prop-types */
import { useState } from "react";

const ChildC = ({ count }) => {
  return (
    <>
      <h1>Child C</h1>
      {console.log("C Rendering")}
      <h1>{count}</h1>
    </>
  );
};

const ChildB = ({ count }) => {
  return (
    <>
      <h1>Child B</h1>
      {console.log("B Rendering")}
      <ChildC count={count} />
    </>
  );
};

const ChildA = ({ count }) => {
  return (
    <>
      <h1>Child A</h1>
      {console.log("A Rendering")}
      <ChildB count={count} />
    </>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent A</h1>
      <button onClick={handleInc}>Inc</button>
      <ChildA count={count} />
    </div>
  );
};

export default Parent;
