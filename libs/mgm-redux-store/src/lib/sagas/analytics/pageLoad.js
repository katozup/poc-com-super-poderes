import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { Creators as ErrorActions } from '../../ducks/error';
import { Creators as AnalyticsActions } from '../../ducks/analytics';
import { getPageLoad, track, ERROR_TYPES } from '@zup-mgm/utils';
import { DefaultPageLoad } from '../models/analytics/pageLoad/DefaultPageLoad';

const {
  ANALYTICS: { GET_GA_PAYLOAD }, 
} = ERROR_TYPES;

export function* trackGAPageLoad() {
  let { pageLoad } = yield select(state => state.analytics);
  const pageLoadRequest = yield buildPageLoadRequest(pageLoad);
  pageLoad = yield getPageLoadPayload (pageLoadRequest);
  AnalyticsActions.setTriggerPageLoadGA(false);
  track(pageLoad);
}

function* buildPageLoadRequest(pageLoad) {
  const dnFromSdk = yield select((state) => state.sdk.dn);
  const { chpras, cpfHashed, customerType } = yield select((state) => state.sdk);
  const { cardType } = yield select(state => state.app);
  const { hasError, whereErrorOccurred } = yield select((state) => state.error);

  return {
    pageName: pageLoad.pageName,
    dn: parseInt(dnFromSdk, 10),
    chpras,
    idpf: cpfHashed,
    clientType: customerType,
    cardType,
    errorName: hasError ? whereErrorOccurred : null,
  };
}

function* getPageLoadPayload(pageLoadRequest) {
  try{
    const { pageLoad, bearerToken } = yield call(getPageLoad, pageLoadRequest);
    yield put(AppActions.setBearerToken(bearerToken));
    return pageLoad;
  } catch(error) {
    yield put(ErrorActions.callErrorHandler(error, GET_GA_PAYLOAD));
    return yield buildDefaultPageLoad();
  }
}

function* buildDefaultPageLoad() {
  const { cardType } = yield select(state => state.app);
  const dnFromSdk = yield select((state) => state.sdk.dn);
  return new DefaultPageLoad(cardType, dnFromSdk, GET_GA_PAYLOAD);
}