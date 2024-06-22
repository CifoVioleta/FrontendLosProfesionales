import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8089/api', // Ajusta la URL base backend
  
});

export default api;