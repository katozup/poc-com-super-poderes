import { getUserData } from '@zup-mgm/utils'
import { put } from 'redux-saga/effects';
import { Creators as userDataActions } from '../ducks/userData';

export default function* setUserData() {
  try {
    const userData = yield getUserData();
    yield put(userDataActions.userDataReducer(userData));
  } catch (error) {
    return console.log(error);
  }
}
