// Path: src/services/commentService.js

import axios from "axios";

const API_URL = "http://localhost:5001/api/comments";

export const addComment = async (postId, parentId, content) => {
  const response = await axios.post(`${API_URL}/${postId}/${parentId || ""}`, { content });
  return response.data;
};

export const getComment = async (commentId) => {
  const response = await axios.get(`${API_URL}/${commentId}`);
  return response.data;
};

export const editComment = async (commentId, content) => {
  const response = await axios.put(`${API_URL}/${commentId}`, { content });
  return response.data;
};

export const deleteComment = async (commentId) => {
  const response = await axios.delete(`${API_URL}/${commentId}`);
  return response.data;
};
