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
          <Link to="/explore" className="navbar-link">
            Explore
          </Link>

          <Link to="/messages" className="navbar-link">
            Messages
          </Link>

          <Link to="/bookmarks" className="navbar-link">
            Bookmarks
          </Link>

          <Link to="/profile" className="navbar-link">
            Profile
          </Link>

          <button className="navbar-link">Logout</button>

          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
