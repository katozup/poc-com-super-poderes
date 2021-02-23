import api from '../../config/api'
import { ENDPOINTS_CONSTANTS } from '../../constants';
import { environment } from '@zup-mgm/utils';

const { GATEWAY_APP_KEY } = environment;
const { LOGIN } = ENDPOINTS_CONSTANTS;

export default function* login(body) {
  const response = yield api.post(`${LOGIN}?gw-app-key=${GATEWAY_APP_KEY}`, {
    autenticacao: body,
  });

  return response.headers['x-access-token'];
}
