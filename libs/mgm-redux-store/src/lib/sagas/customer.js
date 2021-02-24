import { call, put, select } from 'redux-saga/effects';
import criarCliente from '../../../../utils/src/lib/applicationActions/endpoints/criarCliente';
import { Creators as AppActions } from '../ducks/app';
import { DEFAULT_VALUES } from '@zup-mgm/utils';

const { DN_DEFAULT } = DEFAULT_VALUES;

export function* createCustomer() {
  const { name, chpras } = yield select((state) => state.sdk);
  const dn = yield selectDnToCustomerCreation();
  const customer = { nome: name, chpras, dn };
  const { bearerToken } = yield call(criarCliente, customer);
  yield put(AppActions.setBearerToken(bearerToken));
}

function* selectDnToCustomerCreation() {
  const { dn } = yield select(state => state.app.sduiPayload);
  const dnFromSdk = yield select(state => state.sdk.dn);
  if (dn !== DN_DEFAULT) return dn;
  return dnFromSdk;
}
