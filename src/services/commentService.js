// Path: src/services/commentService.js

import api from "../utils/api";

export const addComment = async (postId, parentId, content) => {
  const response = await api.post(`/comments/post/${postId}/${parentId || ""}`, { content });
  return response.data;
};

export const getComment = async (commentId) => {
  const response = await api.get(`/comments/${commentId}`);
  return response.data;
};

export const editComment = async (commentId, content) => {
  const response = await api.put(`/comments/${commentId}`, { content });
  return response.data;
};

export const deleteComment = async (commentId) => {
  const response = await api.delete(`/comments/${commentId}`);
  return response.data;
};
