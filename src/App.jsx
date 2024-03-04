// Path: src/App/App.jsx

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} />

      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage setUser={setUser} />} />
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
