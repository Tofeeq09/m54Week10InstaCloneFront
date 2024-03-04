// Path: src/App/App.jsx

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import ConversationPage from "./pages/ConversationPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  // Load user data from local storage when app starts
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Save user data to local storage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage setUser={setUser} />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore user={user} />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/messages" element={<ConversationPage />} />
        <Route path="/messages/:id" element={<ConversationPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
