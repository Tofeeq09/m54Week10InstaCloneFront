// Path: src/services/postService.js

import api from "../utils/api";

export const addPost = async (handle, postData) => {
  const response = await api.post(`/posts/user/${handle}`, postData);
  return response.data;
};

export const likePost = async (postId) => {
  const response = await api.post(`/posts/${postId}/like`);
  return response.data;
};

export const unlikePost = async (postId) => {
  const response = await api.post(`/posts/${postId}/unlike`);
  return response.data;
};

export const repostPost = async (postId) => {
  const response = await api.post(`/posts/${postId}/repost`);
  return response.data;
};

export const unrepostPost = async (postId) => {
  const response = await api.post(`/posts/${postId}/unrepost`);
  return response.data;
};

export const bookmarkPost = async (postId) => {
  const response = await api.post(`/posts/${postId}/bookmark`);
  return response.data;
};

export const unbookmarkPost = async (postId) => {
  const response = await api.post(`/posts/${postId}/unbookmark`);
  return response.data;
};

export const getAllPosts = async (searchQuery) => {
  const response = await api.get("/posts", { params: { q: searchQuery } });
  return response.data;
};

export const getPostsByHandle = async (handle, searchQuery) => {
  const response = await api.get(`/posts/user/${handle}`, { params: { q: searchQuery } });
  return response.data;
};

export const getPost = async (postId) => {
  const response = await api.get(`/posts/${postId}`);
  return response.data;
};

export const updatePost = async (postId, postData) => {
  const response = await api.put(`/posts/${postId}`, postData);
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await api.delete(`/posts/${postId}`);
  return response.data;
};
