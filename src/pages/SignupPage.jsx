// Path: src/pages/SignupPage.jsx

import { useState } from "react";
import { signup } from "../services/userService";
import "./SignupPage.scss";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    handle: "",
    email: "",
    password: "",
  });
  const [signupMessage, setSignupMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(userData);
      setSignupMessage(`Welcome, ${response.name}! Your account has been created.`);
    } catch (error) {
      console.error(error);
      setSignupMessage("Signup failed. Please check your information and try again.");
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
      </form>
      {signupMessage && <p className="signup-message">{signupMessage}</p>}
    </div>
  );
};

export default SignupPage;
