import { select } from 'redux-saga/effects';
import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';
import { environment } from '../../config/environment';

const { GATEWAY_APP_KEY } = environment;

export function* getSduiContent(
  dn: string,
  chpras: string,
  version: string,
  cashback: boolean,
  pageLoadRequest: any,
) {
  const { bearerToken } = yield select((state) => state.app);
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
  const response = yield api.post(
    `${CONSTANTS.SDUI_PAYLOAD_V1}?gw-app-key=${GATEWAY_APP_KEY}`,
    {
      dn,
      chpras,
      version,
      cashback,
      pageLoadRequest
    },
    config
  );

  return {
    response: response.data,
    bearerToken: response.headers['x-access-token'],
  };
}
