import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';

//TODO: usar variável de ambiente
const GATEWAY_APP_KEY = '3e5cd12084ba01375c2e000d3ac06d76';

export function* getShareLink(
  dn: string,
  chpras: string,
  bearerToken: string,
){
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
  const response = yield api.put(
    `${CONSTANTS.LINK_GERAR_V3}?gw-app-key=${GATEWAY_APP_KEY}`,
    { dn, chpras },
    config
  );

  return response.data.mensagem;
}
