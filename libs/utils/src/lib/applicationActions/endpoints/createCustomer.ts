import { select } from 'redux-saga/effects';
import api from '../../config/api';
import { ENDPOINTS_CONSTANTS } from '../../constants';
import { environment } from '../../config/environment';

const { GATEWAY_APP_KEY } = environment;
const { CLIENTE_CRIAR } = ENDPOINTS_CONSTANTS;

export default function* createCustomer({ nome, chpras, dn }) {
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
