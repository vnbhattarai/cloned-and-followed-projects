import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3035',
  headers: {
    'Content-Type': 'application/json',
  },
});
