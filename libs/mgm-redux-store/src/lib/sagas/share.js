import { call, put, select } from 'redux-saga/effects';

import { getShareLink, login, shareLinkSdk } from '@zup-mgm/utils';
import { Creators as ErrorActions } from '../ducks/error';
import { Creators as ShareActions } from '../ducks/share';
import { ERROR_TYPES } from '@zup-mgm/utils';

const {
  FLOW: { GET_LINK_AND_SHARE },
} = ERROR_TYPES;
const { shareSuccess } = ShareActions;
const { cleanErrorConditionsAndRetryCounts, callErrorHandler } = ErrorActions;

export function* getLinkAndShare(action) {
  try {
    const { chpras } = yield select((state) => state.sdk);
    const { dn } = yield select((state) => state.app.sduiPayload);
    const { autenticacao } = yield select((state) => state.sdk);
    const bearerToken = yield login(autenticacao);
    const shareMessage = yield call(getShareLink, dn, chpras, bearerToken);
    const shareMethod = action.payload.type;

    //TODO: Remover esse log após ter integração com SDK 100% funcional
    console.log('Vai tentar chamar o SDK nativo para enviar o link');

    yield call(shareLinkSdk, shareMessage, shareMethod);
    yield put(shareSuccess(action.payload.componentId));
    return yield put(cleanErrorConditionsAndRetryCounts());
  } catch (error) {
    return yield put(callErrorHandler(error, GET_LINK_AND_SHARE));
  }
}
