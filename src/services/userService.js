// Path: src/services/userService.js

import axios from "axios";

const API_URL = "http://localhost:5001/api/users";

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};

export const followUser = async (handle) => {
  const response = await axios.post(`${API_URL}/follow/${handle}`);
  return response.data;
};

export const unfollowUser = async (handle) => {
  const response = await axios.post(`${API_URL}/unfollow/${handle}`);
  return response.data;
};

export const getUsers = async (searchQuery) => {
  const response = await axios.get(`${API_URL}`, { params: { search: searchQuery } });
  return response.data;
};

export const getUser = async (handle) => {
  const response = await axios.get(`${API_URL}/${handle}`);
  return response.data;
};

export const getPrivate = async (handle) => {
  const response = await axios.get(`${API_URL}/private/${handle}`);
  return response.data;
};

export const updateUser = async (handle, userData) => {
  const response = await axios.put(`${API_URL}/${handle}`, userData);
  return response.data;
};

export const deleteUser = async (handle, password) => {
  const response = await axios.delete(`${API_URL}/${handle}`, { data: { password } });
  return response.data;
};
