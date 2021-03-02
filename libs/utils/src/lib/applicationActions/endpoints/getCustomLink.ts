import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';
import { environment } from '../../config/environment';
import { select } from 'redux-saga/effects';

const { GATEWAY_APP_KEY } = environment;

export function* getCustomLink(
  customLink
){
  const { bearerToken } = yield select(state => state.app);
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
  const response = yield api.post(
    `${CONSTANTS.CUSTOM_LINK}?gw-app-key=${GATEWAY_APP_KEY}`,
    customLink,
    config
  );

  return {
    customLink: response.data,
    bearerToken: response.headers['x-access-token'],
  };
}