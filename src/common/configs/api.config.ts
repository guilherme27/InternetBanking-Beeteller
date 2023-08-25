import axios from 'axios';

const BASE_URL = 'https://apimocha.com';

const api = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export { api };
