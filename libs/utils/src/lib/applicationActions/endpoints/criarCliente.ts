import { select } from 'redux-saga/effects';

import api from '../../config/api';
// import environmentVariables from '../../config/environmentVariables';
import { ENDPOINTS } from '../../constants';


//TODO: usar variavel de ambiente
const GATEWAY_APP_KEY = '3e5cd12084ba01375c2e000d3ac06d76';
const { CLIENTE_CRIAR } = ENDPOINTS;

export default function* criarCliente({ nome, chpras, dn }) {
  const { bearerToken } = yield select(state => state.app);
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };

  const response = yield api.post(
    `${CLIENTE_CRIAR}?gw-app-key=${GATEWAY_APP_KEY}`,
    { nome, chpras, dn },
    config
  );

  return {
    bearerToken: response.headers['x-access-token'],
  };
}
