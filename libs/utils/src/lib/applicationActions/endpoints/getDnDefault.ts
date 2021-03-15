import { select } from 'redux-saga/effects';
import api from '../../config/api';
import ENDPOINTS_CONSTANTS from './ENDPOINTS_CONSTANTS';
import { environment } from '../../config/environment';

const { DN_DEFAULT } = ENDPOINTS_CONSTANTS;
const { GATEWAY_APP_KEY } = environment;

export function* getDnDefault() {
  const { bearerToken, cardType } = yield select((state) => state.app);
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };

  const response = yield api.get(
    `${DN_DEFAULT}?&gw-app-key=${GATEWAY_APP_KEY}&cardType=${cardType}&version=DEFAULT`,
    config
  );

  return {
    response: response.data,
    bearerToken: response.headers['x-access-token'],
  };
}
