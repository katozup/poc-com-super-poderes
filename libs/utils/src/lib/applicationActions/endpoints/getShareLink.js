import api from '../../config/api';
// import environmentVariables from '../../config/environmentVariables';
import LINK_GERAR_V3 from '../ENDPOINTS_CONSTANTS';

// const { GATEWAY_APP_KEY } = environmentVariables;
// const { LINK_GERAR_V3 } = ENDPOINTS;

export default function* getShareLink(dn, chpras, gatewayAppKey, bearerToken) {
  // const { bearerToken } = yield select(state => state.app);
  const config = { headers: { Authorization: `Bearer ${bearerToken}` } };

  const response = yield api.put(
    `${LINK_GERAR_V3}?gw-app-key=${gatewayAppKey}`,
    { dn, chpras },
    config
  );

  return response.data.mensagem;
}
