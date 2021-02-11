import { all, takeLatest } from 'redux-saga/effects';
import { Types as AppTypes } from '../ducks/app';
import { Types as CounterTypes } from '../ducks/counter';
import { Types as ShareTypes } from '../ducks/share';
import { appInit } from './appInit';
import { getLinkAndShare } from './share';
import { counterSaga } from './counter';


export default function* rootSaga() {
  yield all([
    takeLatest(AppTypes.APP_INIT, appInit),
    takeLatest(ShareTypes.SHARE_REQUEST, getLinkAndShare),
    takeLatest(CounterTypes.ADD_COUNTER, counterSaga),
  ]);
}
