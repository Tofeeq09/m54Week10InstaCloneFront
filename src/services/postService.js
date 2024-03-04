// Path: src/services/postService.js

import axios from "axios";

const API_URL = "http://localhost:5001/api/posts";

export const addPost = async (postData) => {
  const response = await axios.post(`${API_URL}`, postData);
  return response.data;
};

export const likePost = async (postId) => {
  const response = await axios.post(`${API_URL}/like/${postId}`);
  return response.data;
};

export const unlikePost = async (postId) => {
  const response = await axios.post(`${API_URL}/unlike/${postId}`);
  return response.data;
};

export const repostPost = async (postId) => {
  const response = await axios.post(`${API_URL}/repost/${postId}`);
  return response.data;
};

export const unrepostPost = async (postId) => {
  const response = await axios.post(`${API_URL}/unrepost/${postId}`);
  return response.data;
};

export const bookmarkPost = async (postId) => {
  const response = await axios.post(`${API_URL}/bookmark/${postId}`);
  return response.data;
};

export const unbookmarkPost = async (postId) => {
  const response = await axios.post(`${API_URL}/unbookmark/${postId}`);
  return response.data;
};

export const getAllPosts = async (searchQuery) => {
  const response = await axios.get(`${API_URL}`, { params: { q: searchQuery } });
  return response.data;
};

export const getPostsByHandle = async (handle, searchQuery) => {
  const response = await axios.get(`${API_URL}/handle/${handle}`, { params: { q: searchQuery } });
  return response.data;
};

export const getPost = async (postId) => {
  const response = await axios.get(`${API_URL}/${postId}`);
  return response.data;
};

export const updatePost = async (postId, postData) => {
  const response = await axios.put(`${API_URL}/${postId}`, postData);
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_URL}/${postId}`);
  return response.data;
};
