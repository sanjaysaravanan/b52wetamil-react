// Create a new component called cards
import "./Cards.css";

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

const Cards = () => {
  return (
    // inline styling
    <div
      style={{
        margin: 16,
        // margin: "16px"
      }}
      className="cards"
    >
      <div className="card">
        <img src={data[0].image} alt={data[0].name} />
        <h1>{data[0].name} </h1>
        <h2>Role: {data[0].role} </h2>
      </div>
      <div className="card">
        <img src={data[1].image} alt={data[1].name} />
        <h1>{data[1].name} </h1>
        <h2>Role: {data[1].role} </h2>
      </div>
      <div className="card">
        <img src={data[2].image} alt={data[2].name} />
        <h1>{data[2].name} </h1>
        <h2>Role: {data[2].role} </h2>
      </div>
    </div>
  );
};

export default Cards;
