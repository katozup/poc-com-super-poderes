import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';

export function* getSduiContent(
  dn: string,
  chpras: string,
  version: string,
  cashBack: boolean,
  mgmAuth: string,
  gatewayAppKey: string,
){
  const config = { headers: { Authorization: `Basic ${mgmAuth}` } };
  console.log('SDUI_PAYLOAD_V1', CONSTANTS.SDUI_PAYLOAD_V1)

  const response = yield api.put(
    `${CONSTANTS.SDUI_PAYLOAD_V1}?gw-app-key=${gatewayAppKey}`,
    {
      dn,
      chpras,
      version,
      cashBack,
    },
    config
  );

  return {
    response: response.data,
  };
}
