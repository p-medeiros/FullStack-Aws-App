import axios from 'axios';

const SistemAPI = axios.create({
  baseURL: `${window.location.protocol}//${import.meta.env.VITE_API_HOST || window.location.hostname}:3333`,
  timeout: 5000,
});

export default SistemAPI;
