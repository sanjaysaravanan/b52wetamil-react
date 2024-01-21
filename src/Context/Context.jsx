/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import CountContext from "../CountContext";

const ChildC = () => {
  // consume the context
  const count = useContext(CountContext);

  return (
    <>
      <h1>Child C</h1>
      {console.log("C Rendering")}
      <h1>{count}</h1>
    </>
  );
};

const ChildB = () => {
  return (
    <>
      <h1>Child B</h1>
      {console.log("B Rendering")}
      <ChildC />
    </>
  );
};

const ChildA = () => {
  return (
    <>
      <h1>Child A</h1>
      {console.log("A Rendering")}
      <ChildB />
    </>
  );
};

const ParentComp = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={count}>
      <div>
        <h1>Parent A</h1>
        <button onClick={handleInc}>Inc</button>
        <ChildA />
      </div>
    </CountContext.Provider>
  );
};

export default ParentComp;
