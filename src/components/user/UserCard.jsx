// Path: src/components/UserCard.jsx

import "./UserCard.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getUser, followUser, unfollowUser } from "../../services/userService";

const UserCard = ({ user: initialUser, currentUser }) => {
  const [user, setUser] = useState(initialUser);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkFollowingStatus = async () => {
      const userData = await getUser(user.handle);
      setIsFollowing(userData.user.followersList.some((followerUser) => followerUser._id === currentUser._id));
      setUser(userData.user); // Update the user data
    };

    checkFollowingStatus();
  }, [user, currentUser]);

  const handleFollowUnfollow = async () => {
    if (isFollowing) {
      await unfollowUser(user.handle);
    } else {
      await followUser(user.handle);
    }
    const updatedUserData = await getUser(user.handle); // Fetch the user data again
    setUser(updatedUserData.user); // Update the user data
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="user-card">
      <img src={user.profilePhoto} alt={user.name} />
      <h2>{user.name}</h2>
      <p>@{user.handle}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      {isFollowing ? (
        <button onClick={handleFollowUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollowUnfollow}>Follow</button>
      )}
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string,
    profilePhoto: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
  }).isRequired,
  currentUser: PropTypes.object,
};

export default UserCard;
