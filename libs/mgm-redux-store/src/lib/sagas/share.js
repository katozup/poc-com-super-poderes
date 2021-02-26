import { call, put, select } from 'redux-saga/effects';

import { getShareLink, login, shareLinkSdk } from '@zup-mgm/utils';
import { Creators as ShareActions } from '../ducks/share';

const { shareSuccess } = ShareActions;

export function* getLinkAndShare(action) {
  try {
    const { chpras } = yield select((state) => state.sdk);
    const { dn } = yield select((state) => state.app.sduiPayload);
    const { autenticacao } = yield select(state => state.sdk);
    const bearerToken = yield login(autenticacao);
    const shareMessage = yield call(getShareLink, dn, chpras, bearerToken);
    const shareMethod = action.payload.type;
    
    //TODO: Remover esse log após ter integração com SDK 100% funcional
    console.log('Vai tentar chamar o SDK nativo para enviar o link');

    yield call(shareLinkSdk, shareMessage, shareMethod);
    yield put(shareSuccess());
    // TODO implementar limpador de erros depois de implementar saga de erros
    // return yield put(cleanErrorConditionsAndRetryCounts());
  } catch (error) {
    console.log(error);
    // return yield put(callErrorHandler(error, GET_LINK_AND_SHARE));
  }
}
