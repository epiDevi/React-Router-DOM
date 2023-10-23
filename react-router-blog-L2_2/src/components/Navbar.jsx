import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <h2 className="logo">My Life</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
