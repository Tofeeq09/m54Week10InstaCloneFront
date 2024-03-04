// Path: src/components/NavBar.jsx

import { Link } from "react-router-dom";
import "./NavBar.scss";
import PropTypes from "prop-types";
import { logout } from "../services/userService";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Y-GRAM
        </Link>
        {user && <p className="navbar-welcome">Welcome, {user.name}</p>}

        <div className="navbar-links">
          {user ? (
            <>
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
              <button onClick={handleLogout} className="navbar-link">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
              <Link to="/signup" className="navbar-link">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

export default Navbar;
