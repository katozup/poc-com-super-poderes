/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { Creators as ErrorActions } from '../../ducks/error';
import { Creators as AnalyticsActions } from '../../ducks/analytics';
import { getCustomLink, track, ERROR_TYPES } from '@zup-mgm/utils';
import { trackGAPageLoad } from './pageLoad';

const {
  ANALYTICS: { GET_GA_PAYLOAD },
} = ERROR_TYPES;

export function* trackGACustomLink(action) {
  const customLinks  = yield select(state => state.analytics);
  const { cardType } = yield select(state => state.app);
  let customLink = customLinks[action.payload.componentId];
  customLink.cardType = cardType;
  customLink = yield getCustomLinkPayload (customLink);
  track(customLink);
}

export function* trackGACustomLinkNPS(action) {
  const { customLinks } = yield select(state => state.analytics);
  let customLinkNPS = customLinks[action.payload.componentId];
  const customLink = yield getCustomLinkPayload(customLinkNPS);
  track(customLink);
}

export function* getCustomLinkPayload(customLinkRequest) {
  try{
    const { customLink, bearerToken } = yield call(getCustomLink, customLinkRequest);
    yield put(AppActions.setBearerToken(bearerToken));
    return customLink;
  } catch(error) {
    yield call(trackGAPageLoad);
    yield put(ErrorActions.callErrorHandler(error, GET_GA_PAYLOAD));
  }
}