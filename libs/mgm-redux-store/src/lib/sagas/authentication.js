import { put, select } from 'redux-saga/effects';
import { login } from '@zup-mgm/utils';
import { Creators as AppActions } from '../ducks/app';

export default function* authentication() {
  const { autenticacao } = yield select(state => state.sdk);
  const bearerToken = yield login(autenticacao);
  yield put(AppActions.setBearerToken(bearerToken));
}
