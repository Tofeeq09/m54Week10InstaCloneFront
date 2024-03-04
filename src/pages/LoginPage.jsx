// Path: src/pages/LoginPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/userService";
import "./LoginPage.scss";
import PropTypes from "prop-types";

const LoginPage = ({ setUser }) => {
  const [userData, setUserData] = useState({
    emailOrHandle: "",
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
      const response = await login({
        email: userData.emailOrHandle.includes("@") ? userData.emailOrHandle : undefined,
        handle: !userData.emailOrHandle.includes("@") ? userData.emailOrHandle : undefined,
        password: userData.password,
      });
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="emailOrHandle"
          placeholder="Email or Handle"
          value={userData.emailOrHandle}
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          className="login-input"
        />
        <button className="form-button login-button" type="submit">
          Login
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginPage;
