import { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: "Sanjay S",
    dob: "2023-10-18",
    pan: "XXXXXXXX",
    address: "Bengaluru",
    gender: "male",
  });

  // const handleAddress = (e) => {
  //   setFormData({
  //     ...formData,
  //     address: e.target.value,
  //   });
  // };

  // const handleGender = (e) => {
  //   setFormData({
  //     ...formData,
  //     gender: e.target.value,
  //   });
  // };

  const handleDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleDataChange}
      />
      <br />
      <br />
      <label htmlFor="dob">DoB: </label>
      <input
        id="dob"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleDataChange}
      />
      <br />
      <br />
      <label htmlFor="pan">Pan: </label>
      <input
        id="pan"
        type="text"
        name="pan"
        value={formData.pan}
        onChange={handleDataChange}
      />
      <br />
      <br />
      <label htmlFor="address">Address: </label>
      <textarea
        id="address"
        value={formData.address}
        onChange={handleDataChange}
        name="address"
      ></textarea>
      <br />
      <br />
      <label htmlFor="gender">Gender: </label>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="male"
        value="male"
        checked={formData.gender === "male"}
        onChange={handleDataChange}
      />
      &nbsp;&nbsp;
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value="female"
        checked={formData.gender === "female"}
        onChange={handleDataChange}
      />
      &nbsp;&nbsp;
      <label htmlFor="others">Others</label>
      <input
        type="radio"
        name="gender"
        id="others"
        value="others"
        checked={formData.gender === "others"}
        onChange={handleDataChange}
      />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormHandling;
