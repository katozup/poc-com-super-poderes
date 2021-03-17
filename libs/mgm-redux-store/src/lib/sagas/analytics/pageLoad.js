import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { getPageLoad, track, ERROR_TYPES, getSduiContent } from '@zup-mgm/utils';
import { DefaultPageLoad } from '../models/analytics/pageLoad/DefaultPageLoad';

const {
  ANALYTICS: { GET_GA_PAYLOAD }, 
} = ERROR_TYPES;

export default function* trackGAPageLoad() {
  let { pageLoad } = yield select(state => state.analytics);
  const pageLoadRequest = yield buildPageLoadRequest(pageLoad);
  const teste = yield call(getSduiContent, pageLoadRequest.dn, pageLoadRequest.chpras, "Default", false, pageLoadRequest);
  pageLoad = yield getPageLoadPayload (pageLoadRequest);
  track(pageLoad);
}

function* buildPageLoadRequest(pageLoad) {
  const { dn, chpras, cpfHashed, customerType } = yield select((state) => state.sdk);
  const { cardType } = yield select(state => state.app);
  const { hasError, whereErrorOccurred } = yield select((state) => state.error);

  return {
    pageName: pageLoad.pageName,
    dn: parseInt(dn, 10),
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
    const errorName = resolveErrorName(pageLoadRequest);
    return yield buildDefaultPageLoad(errorName);
  }
}

const resolveErrorName = (pageLoadRequest) => 
pageLoadRequest.errorName ? pageLoadRequest.errorName : GET_GA_PAYLOAD;

function* buildDefaultPageLoad(errorName) {
  const { cardType } = yield select(state => state.app);
  const { dn, cpfHashed, customerType } = yield select((state) => state.sdk);
  return new DefaultPageLoad(cardType, dn, errorName, cpfHashed, customerType);
}