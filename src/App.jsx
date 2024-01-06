import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Cards";

const batch = "B52WETAMIL";

function App() {
  let count = 0;

  const incCount = () => {
    count++;
  };

  return (
    <>
      <div
        style={{
          border: "2px solid red",
          backgroundColor: "yellow",
        }}
      >
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <label htmlFor="sample-inp"></label>
        <input id="sample-inp" />
      </div>
      <h1>
        Vite, React, {batch}, Mentor, {2 + 4}
      </h1>
      <div className="card">
        <button onClick={incCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <Cards /> */}
      <Cards title="B52WETAMIL PROPS" date="2024-01-06">
        Test Content Inside the Cards Component
      </Cards>
      <Cards title="B49WEENG PROPS" date="2023-12-24">
        <h1>Test Content on the Second Cards Tag</h1>
      </Cards>
      <Cards title="B42WEENG" date="2023-10-12" />
    </>
  );
}

export default App;
