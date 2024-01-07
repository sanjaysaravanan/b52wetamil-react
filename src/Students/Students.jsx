/* React Component for Students */
import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Students.module.css";

const studentsData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grade: "A",
    courses: ["Math", "Physics"],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 21,
    grade: "B",
    courses: ["Chemistry", "Biology"],
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    age: 19,
    grade: "C",
    courses: ["History", "English"],
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Williams",
    age: 22,
    grade: "A",
    courses: ["Computer Science", "Statistics"],
  },
];

const Student = ({
  firstName,
  lastName,
  age,
  grade,
  handleLike,
  isLiked = false,
}) => {
  // const [isLiked, setLiked] = useState(false);

  // //
  // const handleLike = () => {
  //   if (isLiked) {
  //     setLiked(false);
  //   } else {
  //     setLiked(true);
  //   }
  // };

  return (
    <div className={styles["student-root"]}>
      <h1>
        {firstName} {lastName}
      </h1>
      <h3>Age: {age}</h3>
      <h3>
        Grade: {grade}
        {/* Conditional rendering using ? */}
        {grade === "A" ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className={`fa-solid fa-heart ${styles["pink-heart"]}`}></i>
        )}
        {/* Conditional rendering using && */}
        {/* {grade === "A" && <i className="fa-solid fa-star"></i>} */}
      </h3>
      <span style={{ cursor: "pointer" }} onClick={() => handleLike(firstName)}>
        <i
          className={`fa-${
            isLiked ? `solid ${styles["pink-heart"]}` : "regular"
          } fa-thumbs-up fa-2x`}
        ></i>
      </span>
    </div>
  );
};

Student.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.string,
  handleLike: PropTypes.func,
  isLiked: PropTypes.bool,
};

const Students = () => {
  // State Varaible for the list of liked students
  const [likedStudents, setLikedStudents] = useState([]);

  const handleLike = (name) => {
    if (likedStudents.includes(name)) {
      // remove the student from the list
      setLikedStudents(
        likedStudents.filter((studentName) => studentName !== name)
      );
    } else {
      // add the student to the list
      setLikedStudents([...likedStudents, name]);
    }
  };

  return (
    // Empty Fragement
    <>
      {console.log(likedStudents)}
      <div className={styles["liked-count"]}>
        <i className="fa-solid fa-thumbs-up fa-2x"></i> Students (
        {likedStudents.length})
      </div>
      <div className={styles["students-root"]}>
        {studentsData.map((data) => {
          return (
            <Student
              key={data.id}
              {...data}
              handleLike={handleLike}
              isLiked={likedStudents.includes(data.firstName)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Students;
