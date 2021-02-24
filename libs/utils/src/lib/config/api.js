import axios from 'axios';

import { environment } from './environment';

const { GATEWAY_HOST } = environment;

const api = axios.create({
  baseURL: GATEWAY_HOST,
  headers: {
    Accept: 'application/json',
  },
  timeout: 10000,
});

export default api;
