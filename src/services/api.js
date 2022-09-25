import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem('@ConnectionLab:token')
    )}`,
  },
});

export default api;
