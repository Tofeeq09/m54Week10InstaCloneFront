// Path: src/components/NavBar.jsx
import { Link } from "react-router-dom";
import "./NavBar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Y GRAM
        </Link>

        <div className="navbar-links">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
