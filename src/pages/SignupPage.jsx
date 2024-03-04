// Path: src/pages/SignupPage.jsx

import "./SignupPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/userService";
import PropTypes from "prop-types";

const SignupPage = ({ setUser }) => {
  const [userData, setUserData] = useState({
    name: "",
    handle: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(userData);
      setUser(response.rest);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="text"
          name="handle"
          placeholder="Handle"
          value={userData.handle}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          className="signup-input"
        />
        <button className="form-button signup-button" type="submit">
          Signup
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

SignupPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignupPage;
