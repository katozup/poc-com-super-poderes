import { call, put, select } from 'redux-saga/effects';

import { getShareLink, shareLinkSdk } from '@zup-mgm/utils'
import { Creators as ShareActions } from '../ducks/share';

const { shareSuccess } = ShareActions;

export function* getLinkAndShare(action) {
  try {
    const { chpras } = yield select(state => state.sdk);
    const { dnNumber, dnEquivalent } = yield select(state => state.content);

    const dn =
      typeof dnEquivalent !== 'undefined' ? dnEquivalent.dnNumber : dnNumber;

    const shareMessage = { message: yield call(getShareLink, dn, chpras) };
    const shareMethod = action.payload.type;

    yield call(shareLinkSdk, shareMessage, shareMethod);
    yield put(shareSuccess());
    // TODO implementar limpador de erros depois de implementar saga de erros
    // return yield put(cleanErrorConditionsAndRetryCounts());
  } catch (error) {
    return console.log(error);
  }
}
