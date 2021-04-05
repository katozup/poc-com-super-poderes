/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { Creators as ErrorActions } from '../../ducks/error';
import { getCustomLink, track, ERROR_TYPES } from '@zup-mgm/utils';

const { callErrorHandler, cleanErrorConditionsAndRetryCounts } = ErrorActions;
const {
  ANALYTICS: { GET_GA_CUSTOM_LINK_PAYLOAD },
} = ERROR_TYPES;

export function* trackGACustomLink() {
  let { customLink }  = yield select(state => state.analytics);
  yield trackCustomLink(customLink);
}

export function* trackGACustomLinkForShareLink() {
  const { action } = yield select(state => state.app);
  let customLink = action.actionParameter.analytics.analyticsParameter;
  yield trackCustomLink(customLink);
}

function* trackCustomLink(customLink) {
  const { cardType, pageLoadType } = yield select(state => state.app);
  customLink.cardType = cardType;
  customLink = yield getCustomLinkPayload(customLink);
  if(customLink){
    track(customLink);
    yield put(cleanErrorConditionsAndRetryCounts());
  }
  yield put(AppActions.dispatchPageLoad(pageLoadType));
}

export function* trackGACustomLinkNPS() {
  let { customLinkNps } = yield select(state => state.analytics);
  const customLink = yield getCustomLinkPayload(customLinkNps);
  track(customLink);
}

export function* getCustomLinkPayload(customLinkRequest) {
  try {
    const { customLink, bearerToken } = yield call(getCustomLink, customLinkRequest);
    yield put(AppActions.setBearerToken(bearerToken));
    return customLink;
  } catch(error) {
    yield put(callErrorHandler(error, GET_GA_CUSTOM_LINK_PAYLOAD));
    return;
  }
}