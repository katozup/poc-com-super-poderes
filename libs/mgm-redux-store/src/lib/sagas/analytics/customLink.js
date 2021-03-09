/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { getCustomLink, track } from '@zup-mgm/utils';
import { trackGAPageLoad } from './pageLoad';

export function* trackGACustomLink() {
  let { customLink }  = yield select(state => state.analytics);
  const { cardType } = yield select(state => state.app);
  customLink.cardType = cardType;
  customLink = yield getCustomLinkPayload (customLink);
  track(customLink);
}

export function* trackGACustomLinkNPS(action) {
  let { customLinkNps } = yield select(state => state.analytics);
  const customLink = yield getCustomLinkPayload(customLinkNps);
  track(customLink);
}

export function* getCustomLinkPayload(customLinkRequest) {
  try{
    const { customLink, bearerToken } = yield call(getCustomLink, customLinkRequest);
    yield put(AppActions.setBearerToken(bearerToken));
    return customLink;
  } catch(error) {
    yield call(trackGAPageLoad);
  }
}