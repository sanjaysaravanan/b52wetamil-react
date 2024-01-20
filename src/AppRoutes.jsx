import PropTypes from "prop-types";

import Students from "./Students/Students";
import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";
import ToDoListAdvance from "./ToDoList/ToDoListAdvance";

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useSearchParams,
  Navigate,
} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link> <Link to="/register">Register</Link>{" "}
      <Link to="/sanjay?age=30&dob=2023-08-09">User Link</Link>
    </>
  );
};

const Welcome = () => {
  const { userName } = useParams();

  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>Hi {userName}, Welcome to the application</h1>
      <h1>Age: {searchParams.get("age")}</h1>
      <h1>Dob: {searchParams.get("dob")}</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};

const Register = () => {
  return (
    <>
      <h1>Register Page</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};

const PageNotFound = ({ navToHome = false }) => {
  if (navToHome) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <h2>Page Not Found, Please check the URL</h2>
      <Link to="/">Go Home</Link>
    </>
  );
};

PageNotFound.propTypes = {
  navToHome: PropTypes.bool,
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:userName" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="students" element={<Students />} />
      <Route path="todo-list" element={<ToDoList />} />
      <Route path="todo-list-adv" element={<ToDoListAdvance />} />
      <Route path="counter" element={<Counter />} />
      {/* Below route will handle the other router except above */}
      <Route path="*" element={<PageNotFound navToHome={false} />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
