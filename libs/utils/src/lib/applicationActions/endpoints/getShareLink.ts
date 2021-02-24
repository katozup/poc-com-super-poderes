import api from '../../config/api';
import CONSTANTS from './ENDPOINTS_CONSTANTS';
import { environment } from '../../config/environment';

const { GATEWAY_APP_KEY } = environment;

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
