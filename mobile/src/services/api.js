import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.7:4444',
});

export default api; 