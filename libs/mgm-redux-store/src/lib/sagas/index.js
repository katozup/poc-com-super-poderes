import { all, takeLatest } from 'redux-saga/effects';
import { Types as ShareTypes } from '../ducks/share';
import { Types as CounterTypes } from '../ducks/counter';
import { getLinkAndShare } from './share';
import { counterSaga } from './counter';


export default function* rootSaga() {
  yield all([
    takeLatest(ShareTypes.SHARE_REQUEST, getLinkAndShare),
    takeLatest(CounterTypes.ADD_COUNTER, counterSaga),
  ]);
}
