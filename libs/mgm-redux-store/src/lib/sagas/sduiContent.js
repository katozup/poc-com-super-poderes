import { getSduiContent } from '@zup-mgm/utils';
import { put, select } from 'redux-saga/effects';
import { Creators as AppActions } from '../ducks/app';

export default function* sduiContent() {
  const { bearerToken } = yield select((state) => state.app);
  const { chpras, dn, cashback } = yield select((state) => state.userData);

  // TODO trocaremos as vars abaixo:
  const sduiPayload = yield getSduiContent(
    dn,
    chpras,
    'Default',
    cashback,
    bearerToken,
    '3e5cd12084ba01375c2e000d3ac06d76'
  );
  yield put(AppActions.setSduiContent(sduiPayload));
}
