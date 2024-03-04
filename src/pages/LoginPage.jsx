// Path: src/pages/LoginPage.jsx

import { useState } from "react";
import { useCookies } from "react-cookie";
import { login } from "../services/userService";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    emailOrHandle: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies(["token"]);

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
      setCookie("token", response.token, { path: "/" });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="emailOrHandle"
        placeholder="Email or Handle"
        value={userData.emailOrHandle}
        onChange={handleChange}
      />
      <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
      <button className="form-button" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
