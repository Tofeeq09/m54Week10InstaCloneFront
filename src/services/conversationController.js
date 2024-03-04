// Path: src/services/conversationService.js

import axios from "axios";

const API_URL = "http://localhost:5001/api/conversations";

export const startConversation = async (receiverId) => {
  const response = await axios.post(`${API_URL}/start`, { receiverId });
  return response.data;
};

export const sendMessage = async (receiverId, content) => {
  const response = await axios.post(`${API_URL}/send`, { receiverId, content });
  return response.data;
};

export const getAllConversations = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

export const getConversation = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
