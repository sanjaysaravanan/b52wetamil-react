import JailerImg from "../assets/Jailer_2023_Tamil_film_poster.jpg";
import { useEffect, useRef } from "react";

const Reference = () => {
  const imageOne = useRef(null);
  const imageTwo = useRef(null);
  const imageThree = useRef(null);
  let ref = useRef(0);
  const inpRef = useRef(null);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");

    // just for discussing **should not** change style using ref
    imageOne.current.style.border = "5px solid red";
  }

  function scrollToIndex(index) {
    let imgNode = null;

    switch (index) {
      case 1:
        imgNode = imageOne.current;
        break;
      case 2:
        imgNode = imageTwo.current;
        break;
      case 3:
        imgNode = imageThree.current;
        break;
      default:
        imgNode = imageOne.current;
    }

    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  const handleFocus = () => {
    inpRef.current.focus();
  };

  useEffect(() => {
    console.log(imageOne.current);
    // inpRef.current.focus();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <button onClick={handleClick}>Click me!</button>

      <input ref={inpRef} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={() => scrollToIndex(1)}>Jailer</button>
      <button onClick={() => scrollToIndex(2)}>Vikram</button>
      <button onClick={() => scrollToIndex(3)}>Leo</button>
      <img
        ref={imageOne}
        src={JailerImg}
        alt="Jailer"
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
        }}
      />
      <img
        ref={imageTwo}
        src={
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Vikram_2022_poster.jpg/220px-Vikram_2022_poster.jpg"
        }
        alt="Jailer"
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
        }}
      />
      <img
        ref={imageThree}
        src={
          "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Leo_%282023_Indian_film%29.jpg/220px-Leo_%282023_Indian_film%29.jpg"
        }
        alt="Jailer"
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Reference;
