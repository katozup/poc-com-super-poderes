import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';
import { environment } from '../../config/environment';

const { GATEWAY_APP_KEY } = environment;

export function* getSduiContent(
  dn: string,
  chpras: string,
  version: string,
  cashback: boolean,
  mgmAuth: string
) {
  const config = { headers: { Authorization: `Bearer ${mgmAuth}` } };
  const { data, headers } = yield api.post(
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
    data,
    headers,
  };
}
