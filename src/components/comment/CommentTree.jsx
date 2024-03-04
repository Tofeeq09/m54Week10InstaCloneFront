// Path: src/components/comment/CommentTree.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import "./CommentTree.scss";
import { IoMdText } from "react-icons/io";

function CommentTree({ comment, addComment }) {
  const [reply, setReply] = useState({ content: "" });
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReplyChange = (event) => {
    setReply({ content: event.target.value });
  };

  const handleReplySubmit = async (event) => {
    event.preventDefault();
    await addComment(comment.postId, comment._id, reply.content);
    setReply({ content: "" });
    setShowReplyInput(false);
  };

  const handleReplyClick = () => {
    setShowReplyInput(true);
  };

  return (
    <div className="comment">
      <img src={comment.user.profilePhoto} alt={comment.user.name} />
      <p>
        {comment.user.name} (@{comment.user.handle})
      </p>
      <p>{comment.content}</p>
      <p>Likes: {comment.likes}</p>
      <p>Posted on: {new Date(comment.timestamp).toLocaleString()}</p>
      <div className="comment-action" onClick={handleReplyClick}>
        <IoMdText />
      </div>
      {showReplyInput && (
        <form onSubmit={handleReplySubmit}>
          <input type="text" value={reply.content} onChange={handleReplyChange} />
          <button type="submit">Reply</button>
        </form>
      )}
      {comment.children &&
        comment.children.map((child) => <CommentTree key={child._id} comment={child} addComment={addComment} />)}
    </div>
  );
}

CommentTree.propTypes = {
  comment: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default CommentTree;
