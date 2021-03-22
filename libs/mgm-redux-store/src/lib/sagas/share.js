/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, put, select, all } from 'redux-saga/effects';
import { CARD_TYPE, getShareLink, shareLinkSdk } from '@zup-mgm/utils';
import { trackGACustomLink } from './analytics/customLink';
import { Creators as ErrorActions } from '../ducks/error';
import { Creators as ShareActions } from '../ducks/share';
import { Creators as AppActions } from '../ducks/app';
import { BUSINESS_RULES, ERROR_TYPES } from '@zup-mgm/utils';

const {
  FLOW: { GET_LINK_AND_SHARE },
} = ERROR_TYPES;
const { shareSuccess } = ShareActions;
const { cleanErrorConditionsAndRetryCounts, callErrorHandler } = ErrorActions;
const resolveAppName = (cardType) => {
  if (cardType === CARD_TYPE.HIPERCARD || cardType === CARD_TYPE.LUIZACARD) {
    return BUSINESS_RULES.CUSTOM;
  }

  return BUSINESS_RULES.NORMAL;
}

export function* getLinkAndShare(action) {
  try {
    const { chpras } = yield select((state) => state.sdk);
    const { dn } = yield select((state) => state.app.sduiPayload);
    const { cardType } = yield select((state) => state.app);
    const app = resolveAppName(cardType);
    const { shareMessage,  bearerToken } = yield call(getShareLink, dn, chpras, app);
    const shareMethod = action.payload.share.type;
    
    yield put(AppActions.setBearerToken(bearerToken));
    yield call(trackGACustomLink, action);
    //TODO: Remover esse log após ter integração com SDK 100% funcional
    console.log('Vai tentar chamar o SDK nativo para enviar o link');
    yield call(shareLinkSdk, shareMessage, shareMethod);
    yield put(shareSuccess(shareMethod, action.payload.componentId));
    return yield put(cleanErrorConditionsAndRetryCounts());
  } catch (error) {
    return yield put(callErrorHandler(error, GET_LINK_AND_SHARE));
  }
}
