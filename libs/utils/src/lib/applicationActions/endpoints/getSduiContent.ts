import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';

export function* getSduiContent(
  dn: string,
  chpras: string,
  version: string,
  cashback: boolean,
  mgmAuth: string,
  gatewayAppKey: string,
){
  const config = { headers: { Authorization: `Bearer ${mgmAuth}` } };
  const response = yield api.post(
    `${CONSTANTS.SDUI_PAYLOAD_V1}?gw-app-key=${gatewayAppKey}`,
    {
      dn,
      chpras,
      version,
      cashback: cashback,
    },
    config
  );

  return {
    response: response.data,
  };
}
