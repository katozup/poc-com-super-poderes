import { put, select } from 'redux-saga/effects';

import { getSduiContent } from '@zup-mgm/utils';
import { Creators as AppActions } from '../ducks/app';

export default function* sduiContent() {
  const { bearerToken } = yield select(state => state.app);
  const { chpras, dn, } = yield select(state => state.userData);
  
  // TODO trocaremos as vars abaixo:  
  const sduiPayload =  yield getSduiContent(
    dn, 
    chpras, 
    "Default",
    true,
    bearerToken,
    "3e5cd12084ba01375c2e000d3ac06d76", // <- gatewayAppKey: TODO: Pegar das vars de ambiente
  );
  yield put(AppActions.setSduiContent(sduiPayload));
}
