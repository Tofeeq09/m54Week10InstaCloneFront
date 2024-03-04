// Path: src/App/App.jsx

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import ConversationPage from "../pages/ConversationPage";
import LoginPage from "../pages/LoginPage";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/" exact component={HomePage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/messages" component={ConversationPage} />
        <Route path="/messages/:id" component={ConversationPage} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
