import { all, takeLatest } from 'redux-saga/effects';
import { Types as AppTypes } from '../ducks/app';
import { Types as ShareTypes } from '../ducks/share';
import { Types as AnalyticsTypes } from '../ducks/analytics';
import { initApp } from './initApp';
import { getLinkAndShare } from './share';
import { trackGACustomLink } from './analytics';

export default function* rootSaga() {
  yield all([
    takeLatest(AppTypes.INIT_APP, initApp),
    takeLatest(AnalyticsTypes.PAGE_NAME_ITEM_CLICKED, trackGACustomLink),
    takeLatest(AnalyticsTypes.EVENT_CATEGORY_EVENT_LABEL, trackGACustomLink),
    takeLatest(ShareTypes.SHARE_REQUEST, getLinkAndShare),
  ]);
}
