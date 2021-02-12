import api from '../../config/api';
import CONTEUDO_WHITE_LABEL_V1 from './ENDPOINTS_CONSTANTS';

export default function* getShareLink(
  dn: string,
  chpras: string,
  gatewayAppKey: string,
  bearerToken: string,
){
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };

  const response = yield api.put(
    `${CONTEUDO_WHITE_LABEL_V1}?gw-app-key=${gatewayAppKey}`,
    { dn, chpras },
    config
  );

  return {
    response: response.data,
  };
}
