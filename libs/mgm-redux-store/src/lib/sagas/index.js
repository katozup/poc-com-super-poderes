import { all, takeLatest } from 'redux-saga/effects';
import { Types as AppTypes } from '../ducks/app';
import { Types as ShareTypes } from '../ducks/share';
import { Types as ErrorTypes } from '../ducks/error';
import { initApp } from './initApp';
import { getLinkAndShare } from './share';
import errorHandler from './errors/handlers/errorHandler';
import tryAgainHandler from './errors/handlers/tryAgainHandler';
// import { Types as AnalyticsTypes } from '../ducks/analytics';
// import trackGAPageLoad from './analytics/pageLoad';

export default function* rootSaga() {
  yield all([
    takeLatest(AppTypes.INIT_APP, initApp),
    // takeLatest(AnalyticsTypes.PAGE_NAME, trackGAPageLoad),
    // takeLatest(AnalyticsTypes.TRACK_PAGE_LOAD_ERROR, trackGAPageLoad),
    takeLatest(ShareTypes.SHARE_REQUEST, getLinkAndShare),
    takeLatest(ErrorTypes.CALL_ERROR_HANDLER, errorHandler),
    takeLatest(ErrorTypes.TRY_AGAIN, tryAgainHandler),
  ]);
}
