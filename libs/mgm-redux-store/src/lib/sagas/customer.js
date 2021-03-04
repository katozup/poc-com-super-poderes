// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { createCustomer, DEFAULT_VALUES } from '@zup-mgm/utils';
import { call, put, select } from 'redux-saga/effects';
import { Creators as AppActions } from '../ducks/app';

const { DN_DEFAULT_CREDICARD } = DEFAULT_VALUES;

export function* create() {
  const { name, chpras } = yield select((state) => state.sdk);
  const dn = yield selectDnToCustomerCreation();
  const customer = { nome: name, chpras, dn };
  const { bearerToken } = yield call(createCustomer, customer);
  yield put(AppActions.setBearerToken(bearerToken));
}

function* selectDnToCustomerCreation() {
  const { dn } = yield select((state) => state.app.sduiPayload);
  const dnFromSdk = yield select((state) => state.sdk.dn);
  if (dn !== DN_DEFAULT_CREDICARD) return dn;
  return dnFromSdk;
}
