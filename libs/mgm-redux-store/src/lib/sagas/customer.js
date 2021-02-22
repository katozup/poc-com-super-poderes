import { call, put, select } from 'redux-saga/effects';

// import environmentVariables from '../../config/environmentVariables';
import criarCliente from '../../../../utils/src/lib/applicationActions/endpoints/criarCliente';
import { Creators as AppActions } from '../ducks/app';

export function* createCustomer() {
  const { name, chpras } = yield select((state) => state.userData);
  const { dn } = yield select((state) => state.app.sduiPayload.response);
  const customer = { nome: name, chpras, dn };
  const { bearerToken } = yield call(criarCliente, customer);
  yield put(AppActions.setBearerToken(bearerToken));
}
