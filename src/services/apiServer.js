// apiServer.js
import axiosInstance from './axiosConfig.js';

// Login
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

// Register
export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};

// Logout
export const logoutUser = async () => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data;
};

// Get User Info
export const getUserInfo = async () => {
  const response = await axiosInstance.get('/auth/user');
  return response.data;
};