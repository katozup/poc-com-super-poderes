import { getUserData } from '@zup-mgm/utils'
import { put } from 'redux-saga/effects';
import { Creators as sdkActions } from '../ducks/sdk';

export default function* setSdkData() {
  try {
    const userData = yield getUserData();
    yield put(sdkActions.sdkReducer(userData));
  } catch (error) {
    return console.log(error);
  }
}
