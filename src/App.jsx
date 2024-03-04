// Path: src/App/App.jsx

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/" element={HomePage} />
        <Route path="/profile/:id" element={ProfilePage} />
        <Route path="/post/:id" element={PostPage} />
        <Route path="/messages" element={ConversationPage} />
        <Route path="/messages/:id" element={ConversationPage} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
