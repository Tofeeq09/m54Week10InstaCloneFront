// Path: src/pages/HomePage.jsx

import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postService";
import PostCard from "../components/post/PostCard";
import "./HomePage.scss";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts(searchQuery);
      setPosts(data);
    };

    fetchPosts();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePostUpdate = (updatedPost) => {
    setPosts(posts.map((post) => (post._id === updatedPost._id ? updatedPost : post)));
  };

  return (
    <div className="home-page">
      <input type="text" placeholder="Search posts..." value={searchQuery} onChange={handleSearchChange} />
      {posts.map((post) => (
        <PostCard key={post._id} post={post} onPostUpdate={handlePostUpdate} />
      ))}
    </div>
  );
}

export default HomePage;
