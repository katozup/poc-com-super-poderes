import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';

//TODO: usar variável de ambiente
const GATEWAY_APP_KEY = '3e5cd12084ba01375c2e000d3ac06d76';

export function* getSduiContent(
  dn: string,
  chpras: string,
  version: string,
  cashBack: boolean,
  mgmAuth: string
) {
  const config = { headers: { Authorization: `Bearer ${mgmAuth}` } };
  const { data, headers } = yield api.post(
    `${CONSTANTS.SDUI_PAYLOAD_V1}?gw-app-key=${GATEWAY_APP_KEY}`,
    {
      dn,
      chpras,
      version,
      cashBack,
    },
    config
  );

  return {
    data,
    headers
  };
}
