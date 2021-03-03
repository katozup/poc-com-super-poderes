import { all, takeLatest } from 'redux-saga/effects';
import { Types as AppTypes } from '../ducks/app';
import { Types as ShareTypes } from '../ducks/share';
import { Types as ErrorTypes } from '../ducks/error';
import { initApp } from './initApp';
import { getLinkAndShare } from './share';
import errorHandler from './errors/handlers/errorHandler';
import tryAgainHandler from './errors/handlers/tryAgainHandler';
import { Types as AnalyticsTypes } from '../ducks/analytics';
import { trackGACustomLink } from './analytics';

export default function* rootSaga() {
  yield all([
    takeLatest(AppTypes.INIT_APP, initApp),
    takeLatest(AnalyticsTypes.PAGE_NAME_ITEM_CLICKED, trackGACustomLink),
    takeLatest(AnalyticsTypes.EVENT_CATEGORY_EVENT_LABEL, trackGACustomLink),
    takeLatest(ShareTypes.SHARE_REQUEST, getLinkAndShare),
    takeLatest(ErrorTypes.CALL_ERROR_HANDLER, errorHandler),
    takeLatest(ErrorTypes.TRY_AGAIN, tryAgainHandler),
  ]);
}
