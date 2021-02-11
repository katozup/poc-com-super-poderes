import axios from 'axios';

// import environmentVariables from './environmentVariables';

// const { GATEWAY_HOST } = environmentVariables;
const { GATEWAY_HOST } = 'host';
const api = axios.create({
  baseURL: GATEWAY_HOST,
  headers: {
    Accept: 'application/json',
  },
  timeout: 10000,
});

export default api;
