import axios from 'axios';

// import environmentVariables from './environmentVariables';

// const { GATEWAY_HOST } = environmentVariables;
// TODO trocar aqui pelas variaveis de ambiente
const GATEWAY_HOST = 'https://itau-k8s.dev.gateway.zup.me';
const api = axios.create({
  baseURL: GATEWAY_HOST,
  headers: {
    Accept: 'application/json',
  },
  timeout: 10000,
});

export default api;
