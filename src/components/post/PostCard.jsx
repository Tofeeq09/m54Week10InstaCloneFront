// Path: src/components/post/PostCard.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import {
  likePost,
  unlikePost,
  repostPost,
  unrepostPost,
  bookmarkPost,
  unbookmarkPost,
  getPost,
} from "../../services/postService";
import "./PostCard.scss";
import { FcLike } from "react-icons/fc";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";

function PostCard({ post, onPostUpdate }) {
  const [isLiked, setIsLiked] = useState(post.likedBy.includes(/* current user's id */));
  const [isReposted, setIsReposted] = useState(post.repostedBy.includes(/* current user's id */));
  const [isBookmarked, setIsBookmarked] = useState(post.bookmarkedBy.includes(/* current user's id */));

  const handleLike = async () => {
    if (isLiked) {
      await unlikePost(post._id);
    } else {
      await likePost(post._id);
    }
    const updatedPostData = await getPost(post._id);
    onPostUpdate(updatedPostData);
    setIsLiked(!isLiked);
  };

  const handleRepost = async () => {
    if (isReposted) {
      await unrepostPost(post._id);
    } else {
      await repostPost(post._id);
    }
    const updatedPostData = await getPost(post._id);
    onPostUpdate(updatedPostData);
    setIsReposted(!isReposted);
  };

  const handleBookmark = async () => {
    if (isBookmarked) {
      await unbookmarkPost(post._id);
    } else {
      await bookmarkPost(post._id);
    }
    const updatedPostData = await getPost(post._id);
    onPostUpdate(updatedPostData);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img className="profile-photo" src={post.creator.profilePhoto} alt={post.creator.name} />
        <h2>
          {post.creator.name} (@{post.creator.handle})
        </h2>
      </div>
      <img className="post-image" src={post.content.postImage} alt={post.content.caption} />
      <p>{post.content.caption}</p>
      <div className="post-stats">
        <div className="post-action" onClick={handleLike}>
          <FcLike color={isLiked ? "red" : "black"} />
          <p>{post.likes}</p>
        </div>
        <div className="post-action" onClick={handleRepost}>
          <BiRepost color={isReposted ? "green" : "black"} />
          <p>{post.reposts}</p>
        </div>
        <div className="post-action" onClick={handleBookmark}>
          <FaRegBookmark color={isBookmarked ? "blue" : "black"} />
          <p>{post.bookmarks}</p>
        </div>
      </div>
      <p>Posted on: {new Date(post.timestamp).toLocaleString()}</p>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  onPostUpdate: PropTypes.func.isRequired,
};

export default PostCard;
