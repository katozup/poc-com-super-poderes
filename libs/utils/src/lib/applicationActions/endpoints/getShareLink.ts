import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';

export function* getShareLink(
  dn: string,
  chpras: string,
  gatewayAppKey: string,
  bearerToken: string,
){
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
  const response = yield api.put(
    `${CONSTANTS.LINK_GERAR_V3}?gw-app-key=${gatewayAppKey}`,
    { dn, chpras },
    config
  );

  return response.data.mensagem;
}
