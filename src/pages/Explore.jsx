// Path: src/pages/Explore.jsx

import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import UserCard from "../components/user/UserCard";
import "./Explore.scss";

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(searchQuery);
      setUsers(data.users);
    };

    fetchUsers();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="explore-page">
      <input type="text" placeholder="Search users..." value={searchQuery} onChange={handleSearchChange} />
      <h1>Explore</h1>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Explore;
