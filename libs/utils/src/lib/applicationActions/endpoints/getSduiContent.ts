import { select } from 'redux-saga/effects';
import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';
//TODO: usar variável de ambiente
const GATEWAY_APP_KEY = '3e5cd12084ba01375c2e000d3ac06d76';

export function* getSduiContent(
  dn: string,
  chpras: string,
  version: string,
  cashback: boolean
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
    },
    config
  );

  return {
    response: response.data,
    bearerToken: response.headers['x-access-token'],
  };
}
