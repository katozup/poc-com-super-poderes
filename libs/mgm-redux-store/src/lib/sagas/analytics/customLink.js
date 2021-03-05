/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { getCustomLink, track } from '@zup-mgm/utils';

export function* getCustomLinkPayload(customLinkRequest) {
  try{
    const { customLink, bearerToken } = yield call(getCustomLink, customLinkRequest);
    yield put(AppActions.setBearerToken(bearerToken));
    return customLink;
  } catch(error) {
    //TODO: Abrir tela de erro (será feito em outra task)
    console.log(error);
  }
}

export function* trackGACustomLink() {
  let { customLink } = yield select(state => state.analytics);
  const { cardType } = yield select(state => state.app);
  customLink.cardType = cardType;
  customLink = yield getCustomLinkPayload (customLink);
  track(customLink);
}

export function* trackGACustomLinkNPS() {
  const { customLinkNPS } = yield select(state => state.analytics);
  const customLink = yield getCustomLinkPayload(customLinkNPS);
  track(customLink);
}