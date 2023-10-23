import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnungszeit">Öffnungszeiten</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </nav>
    </>
  );
};

export default Header;
