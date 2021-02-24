import { all, takeLatest } from 'redux-saga/effects';
import { Types as AppTypes } from '../ducks/app';
import { Types as ShareTypes } from '../ducks/share';
import { initApp } from './initApp';
import { getLinkAndShare } from './share';

export default function* rootSaga() {
  yield all([
    takeLatest(AppTypes.INIT_APP, initApp),
    takeLatest(ShareTypes.SHARE_REQUEST, getLinkAndShare),
  ]);
}
