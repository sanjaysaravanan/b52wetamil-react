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
  Outlet,
} from "react-router-dom";
import Parent from "./Props-Drilling/Drilling";
import ParentComp from "./Context/Context";
import ThemeContext from "./ThemeContext";
import { useContext, useState } from "react";

const Layout = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <header
        style={{
          position: "fixed",
          height: "75px",
          backgroundColor: theme === "light" ? "#f5ebeb" : "#000",
          top: 0,
          width: "100vw",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1>Simple React App for All Concepts</h1>
      </header>
      <aside
        style={{
          position: "fixed",
          height: "calc(100vh - 75px)",
          backgroundColor: theme === "light" ? "#f5ebeb" : "#000",
          top: "75px",
          width: "200px",
          textAlign: "center",
          color: theme === "light" ? "#000" : "#fff",
        }}
        className="content-container"
      >
        <Link to="/login">Login</Link> <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/sanjay?age=30&dob=2023-08-09">User Link</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/students">Students</Link>
        <br />
        <Link to="/todo-list">Todo List</Link>
        <br />
        <Link to="/todo-list-adv">Adv Todo List</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
      </aside>
      <div
        style={{
          marginTop: "75px",
          marginLeft: "200px",
          padding: 16,
          border: "1px solid",
          color: theme === "light" ? "#000" : "#fff",
          backgroundColor: theme === "light" ? "#f5ebeb" : "#000",
          height: "calc(100vh - 75px)",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
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

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};

// except login, register. all other pages should have header and sidebar

const AppRoutes = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <button
        style={{
          position: "fixed",
          zIndex: 10000,
          top: 0,
        }}
        onClick={changeTheme}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:userName" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="todo-list" element={<ToDoList />} />
              <Route path="todo-list-adv" element={<ToDoListAdvance />} />
              <Route path="counter" element={<Counter />} />
              <Route path="props-drilling" element={<Parent />} />
              <Route path="context-hook" element={<ParentComp />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Below route will handle the other router except above */}
            <Route path="*" element={<PageNotFound navToHome={false} />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
};

export default AppRoutes;
