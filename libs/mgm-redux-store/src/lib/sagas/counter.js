import { put } from 'redux-saga/effects';
import { Creators as CounterActions } from '../ducks/counter';

const { addCounter } = CounterActions;

export function* counterSaga(action) {
  try {
    console.log('act funcionou????', action)
    yield put(addCounter());
  } catch (error) {
    return console.log(error);
  }
}
