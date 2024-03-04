// Path: src/services/userService.js

import api from "../utils/api";

export const signup = async (userData) => {
  const response = await api.post("/users/signup", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await api.post("/users/login", userData);
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/users/logout");
  return response.data;
};

export const followUser = async (handle) => {
  const response = await api.post(`/users/${handle}/follow`);
  return response.data;
};

export const unfollowUser = async (handle) => {
  const response = await api.post(`/users/${handle}/unfollow`);
  return response.data;
};

export const getUsers = async (searchQuery) => {
  const response = await api.get("/users", { params: { search: searchQuery } });
  return response.data;
};

export const getUser = async (handle) => {
  const response = await api.get(`/users/${handle}`);
  return response.data;
};

export const getPrivate = async (handle) => {
  const response = await api.get(`/users/${handle}/private`);
  return response.data;
};

export const updateUser = async (handle, userData) => {
  const response = await api.put(`/users/${handle}`, userData);
  return response.data;
};

export const deleteUser = async (handle, password) => {
  const response = await api.delete(`/users/${handle}`, { data: { password } });
  return response.data;
};
