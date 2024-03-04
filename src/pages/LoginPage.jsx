// Path: src/pages/LoginPage.jsx

import { useState } from "react";
import { login } from "../services/userService";
import "./LoginPage.scss";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    emailOrHandle: "",
    password: "",
  });
  const [loginMessage, setLoginMessage] = useState("");

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
      setLoginMessage(`Welcome, ${response.user.name}!`);
    } catch (error) {
      console.error(error);
      setLoginMessage("Login failed. Please check your credentials and try again.");
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
      </form>
      {loginMessage && <p className="login-message">{loginMessage}</p>}
    </div>
  );
};

export default LoginPage;
