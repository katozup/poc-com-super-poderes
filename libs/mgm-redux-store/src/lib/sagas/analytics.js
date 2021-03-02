import { call, select, put } from 'redux-saga/effects';
import { Creators as AnalyticsActions } from '../ducks/analytics';
import { Creators as AppActions } from '../ducks/app';
import { getCustomLink } from '../../../../utils/src/lib/applicationActions/endpoints/getCustomLink';
import track from '../../../../utils/src/lib/applicationActions/analytics/track';

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
