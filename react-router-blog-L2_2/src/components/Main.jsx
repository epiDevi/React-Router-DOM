import { Link, NavLink } from "react-router-dom";
import "./Main.css";
const Main = () => {
  return (
    <>
      <h1>Welcome to my Simple Blog</h1>
      <NavLink to="/blog">Go to articles</NavLink>
    </>
  );
};

export default Main;
