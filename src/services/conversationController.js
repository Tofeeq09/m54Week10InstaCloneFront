// Path: src/services/conversationService.js

import api from "../utils/api";

export const startConversation = async (receiverId) => {
  const response = await api.post("/conversations", { receiverId });
  return response.data;
};

export const sendMessage = async (receiverId, content) => {
  const response = await api.post(`/conversations/${receiverId}/message`, { receiverId, content });
  return response.data;
};

export const getAllConversations = async () => {
  const response = await api.get("/conversations");
  return response.data;
};

export const getConversation = async (id) => {
  const response = await api.get(`/conversations/${id}`);
  return response.data;
};
