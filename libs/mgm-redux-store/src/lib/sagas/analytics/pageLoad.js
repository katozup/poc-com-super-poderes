import { call, select, put } from 'redux-saga/effects';
import { Creators as AppActions } from '../../ducks/app';
import { getPageLoad, track } from '@zup-mgm/utils';

function* buildPageLoadRequest(pageLoad) {
  const dnFromSdk = yield select((state) => state.sdk.dn);
  const { chpras, cpfHashed, customerType } = yield select((state) => state.sdk);
  const { cardType } = yield select(state => state.app);

  return {
    pageName: pageLoad.pageName,
    dn: parseInt(dnFromSdk, 10),
    chpras,
    idpf: cpfHashed,
    clientType: customerType,
    cardType
  };
}

function* getPageLoadPayload(pageLoadRequest) {
  try{
    const { pageLoad, bearerToken } = yield call(getPageLoad, pageLoadRequest);
    yield put(AppActions.setBearerToken(bearerToken));
    return pageLoad;
  } catch(error) {
    //TODO: Abrir tela de erro (será feito em outra task)
    console.log(error);
  }
}

export function* trackGAPageLoad() {
  let { pageLoad } = yield select(state => state.analytics);
  const pageLoadRequest = yield buildPageLoadRequest(pageLoad);
  pageLoad = yield getPageLoadPayload (pageLoadRequest);
  track(pageLoad);
}