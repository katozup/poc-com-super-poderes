import { select } from "redux-saga/effects";
import api from '../../config/api';
import ENDPOINTS_CONSTANTS from './ENDPOINTS_CONSTANTS';

const { DN_DEFAULT } = ENDPOINTS_CONSTANTS;
const GATEWAY_APP_KEY = '3e5cd12084ba01375c2e000d3ac06d76';
const cardType = 'CREDICARD';

export function* getDnDefault() {
  const { bearerToken } = yield select((state) => state.app);
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
