// Path: src/components/post/PostDetail.jsx

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPost } from "../../services/postService";
import { getComment, addComment } from "../../services/commentService";
import CommentTree from "../comment/CommentTree";
import "./PostDetail.scss";
import { FcLike } from "react-icons/fc";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import {
  likePost,
  unlikePost,
  repostPost,
  unrepostPost,
  bookmarkPost,
  unbookmarkPost,
} from "../../services/postService";

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [reply, setReply] = useState({ parentId: null, content: "" });
  const [showReplyInput, setShowReplyInput] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const postDetail = await getPost(postId);
      setPost(postDetail);
      setIsLiked(postDetail.likedBy.includes(/* current user's id */));
      setIsReposted(postDetail.repostedBy.includes(/* current user's id */));
      setIsBookmarked(postDetail.bookmarkedBy.includes(/* current user's id */));
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (post) {
      const fetchComments = async () => {
        const commentsPromises = post.comments.map((comment) => getComment(comment._id));
        const commentsDetail = await Promise.all(commentsPromises);
        setComments(commentsDetail);
      };

      fetchComments();
    }
  }, [post]);

  const handleLike = async () => {
    isLiked ? await unlikePost(post._id) : await likePost(post._id);
    const updatedPostData = await getPost(post._id);
    setPost(updatedPostData);
    setIsLiked(!isLiked);
  };

  const handleRepost = async () => {
    isReposted ? await unrepostPost(post._id) : await repostPost(post._id);
    const updatedPostData = await getPost(post._id);
    setPost(updatedPostData);
    setIsReposted(!isReposted);
  };

  const handleBookmark = async () => {
    isBookmarked ? await unbookmarkPost(post._id) : await bookmarkPost(post._id);
    const updatedPostData = await getPost(post._id);
    setPost(updatedPostData);
    setIsBookmarked(!isBookmarked);
  };

  const handleReplyChange = (event) => {
    setReply({ ...reply, content: event.target.value });
  };

  const handleReplySubmit = async (event) => {
    event.preventDefault();
    await addComment(postId, reply.parentId, reply.content);
    setReply({ parentId: null, content: "" });
    setShowReplyInput(false);
    // fetch the updated post data here
  };

  const handleReplyClick = (parentId) => {
    setReply({ parentId, content: "" });
    setShowReplyInput(true);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h2>
        {post.creator.name} (@{post.creator.handle})
      </h2>
      <img src={post.creator.profilePhoto} alt={post.creator.name} />
      <img src={post.content.postImage} alt={post.content.caption} />
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
        <div className="post-action" onClick={() => handleReplyClick(null)}>
          <IoMdText />
        </div>
      </div>
      <p>Posted on: {new Date(post.timestamp).toLocaleString()}</p>
      {showReplyInput && reply.parentId === null && (
        <form onSubmit={handleReplySubmit}>
          <input type="text" value={reply.content} onChange={handleReplyChange} />
          <button type="submit">Reply</button>
        </form>
      )}
      {comments.map((commentDetail) => (
        <div key={commentDetail.comment._id}>
          <CommentTree comment={commentDetail.commentTree[0]} addComment={addComment} />
        </div>
      ))}
    </div>
  );
}

PostDetail.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostDetail;
