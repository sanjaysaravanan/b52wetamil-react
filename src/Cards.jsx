// Create a new component called cards
import PropTypes from "prop-types";
// normal css import
// import './Cards.css';

// Module CSS
import styles from "./Cards.module.css";

const data = [
  {
    name: "John",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-rqj-T0YTR8n8NU9WHVJnAwT6NMdOYo-lEGDEOt_Gw&s",
    age: 45,
    role: "Senior",
  },
  {
    name: "Danny",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    age: 35,
    role: "Mid Level",
  },
  {
    name: "Sam",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
    age: 25,
    role: "Junior",
  },
];

// Senior - Yello Star
// Junior - Maroon Star
// Mid Level - Pink Star

// Getting rest all of the props
const Card = ({ name, image, role, ...restProps }) => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Clicking");
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h1>{name} </h1>
      <h2>Role: {role} </h2>
      {/* Conditional Rendering */}
      {role === "Senior" && <i className="fa-solid fa-star"></i>}
      {console.log("rest props", restProps)}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  role: PropTypes.string,
};

const Cards = (props) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitting################################");
  };

  return (
    // inline styling
    <div
      style={{
        margin: 16,
        // margin: "16px"
      }}
      className={styles.container}
    >
      <h1>{props.title}</h1>
      <h2>Date: {props.date}</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" value={props.date} />
        <input type="submit" name="submit" />
      </form>
      {/* <Card name={data[0].name} image={data[0].image} role={data[0].role} />
      <Card name={data[1].name} image={data[1].image} role={data[1].role} />
      <Card name={data[2].name} image={data[2].image} role={data[2].role} /> */}
      {/* <Card {...data[2]} /> */}
      {/* working with the list */}
      {/* {[
        <Card
          key={data[0].name}
          name={data[0].name}
          image={data[0].image}
          role={data[0].role}
        />,
        <Card
          key={data[1].name}
          name={data[1].name}
          image={data[1].image}
          role={data[1].role}
        />,
        <Card
          key={data[2].name}
          name={data[2].name}
          image={data[2].image}
          role={data[2].role}
        />,
      ]} */}

      {data.map((cardData) => (
        <Card
          // Do not use index as key
          key={cardData.name}
          name={cardData.name}
          image={cardData.image}
          role={cardData.role}
        />
      ))}
      <div>{props.children}</div>
    </div>
  );
};

Cards.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Cards;
