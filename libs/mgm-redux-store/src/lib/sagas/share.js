/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, put, select } from 'redux-saga/effects';
import { BUSINESS_RULES, ERROR_TYPES, CARD_TYPE, getShareLink, shareLinkSdk } from '@zup-mgm/utils';
import { trackGACustomLinkForShareLink } from './analytics/customLink';
import { Creators as ErrorActions } from '../ducks/error';
import { Creators as ShareActions } from '../ducks/share';
import { Creators as AppActions } from '../ducks/share';

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

    yield call(trackGACustomLinkForShareLink);
    yield put(AppActions.setBearerToken(bearerToken));
    yield call(shareLinkSdk, shareMessage, shareMethod);
    yield put(shareSuccess(shareMethod, action.payload.componentId));
    return yield put(cleanErrorConditionsAndRetryCounts());
  } catch (error) {
    return yield put(callErrorHandler(error, GET_LINK_AND_SHARE));
  }
}
