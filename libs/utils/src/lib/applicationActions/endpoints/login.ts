import api from '../../config/api';
import { ENDPOINTS } from '../../constants';

//TODO: usar variável de ambiente
const GATEWAY_APP_KEY = '3e5cd12084ba01375c2e000d3ac06d76';
const { LOGIN } = ENDPOINTS;

export default function* login(body) {
  const response = yield api.post(`${LOGIN}?gw-app-key=${GATEWAY_APP_KEY}`, {
    autenticacao: body,
  });

  return response.headers['x-access-token'];
}
