import api from '../../config/api';
import LINK_GERAR_V3 from './ENDPOINTS_CONSTANTS';

export default function* getShareLink(
  dn: string,
  chpras: string,
  gatewayAppKey: string,
  bearerToken: string,
){
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
  const response = yield api.put(
    `${LINK_GERAR_V3}?gw-app-key=${gatewayAppKey}`,
    { dn, chpras },
    config
  );

  return response.data.mensagem;
}
