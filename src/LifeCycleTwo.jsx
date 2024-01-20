import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LifeCycleTwo.css";

// Using the LifeCycle Hook useEffect
const PopUp = ({ handlePopUp }) => {
  const [festival, setFestival] = useState("");

  const [wish, setWish] = useState(false);

  const handleFestivalChange = (e) => {
    setFestival(e.target.value);
  };

  const handleWish = () => {
    setWish(true);
  };

  // set the festival to be Pongal in the Mouted phase
  // Mounted
  useEffect(() => {
    // alert("alert in useEffect One");
    // setFestival("Pongal");

    return () => {
      // will execute on both mounted & unmount
      // handle it with condition
      alert("Component Unmounting");
    };
  }, []);

  // during the change in the values of the dependency list as well as during mounted
  // mounted & updation
  useEffect(() => {
    alert("alert in useEffect Two");

    if (wish) {
      alert("Line 31");
      setFestival("Pongal");
    }
  }, [wish]);

  return (
    <div className="pop-up">
      {console.log("rendering")}
      <i onClick={handlePopUp} className="fa-close fa-solid fa-2x"></i>
      <div>
        {!wish && (
          <>
            <input onChange={handleFestivalChange} value={festival} />
            <button onClick={handleWish}>Show Wish</button>
          </>
        )}
        {wish && <h1>Happy {festival}</h1>}
      </div>
    </div>
  );
};

PopUp.propTypes = {
  handlePopUp: PropTypes.func,
};

const LifeCycleTwo = () => {
  const [open, setOpen] = useState(false);

  const handlePopUp = () => {
    setOpen(!open);
  };

  return (
    <div>
      <h1>Simple Heading For background Display</h1>
      <button onClick={() => handlePopUp()}>
        {open ? "Close" : "Open"} the Pop Up
      </button>
      {open && <PopUp handlePopUp={handlePopUp} />}
    </div>
  );
};

export default LifeCycleTwo;
