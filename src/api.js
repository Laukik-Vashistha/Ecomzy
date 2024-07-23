import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8055', // Replace with your Directus instance URL
});

export default api;