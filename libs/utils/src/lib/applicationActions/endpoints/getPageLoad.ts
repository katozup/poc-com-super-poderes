import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';
import { environment } from '../../config/environment';
import { select } from 'redux-saga/effects';

const { GATEWAY_APP_KEY } = environment;

export function* getPageLoad(
  pageLoad
){
  const { bearerToken } = yield select(state => state.app);
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
  const response = yield api.post(
    `${CONSTANTS.PAGE_LOAD}?gw-app-key=${GATEWAY_APP_KEY}`,
    pageLoad,
    config
  );

  return {
    pageLoad: response.data,
    bearerToken: response.headers['x-access-token'],
  };
}