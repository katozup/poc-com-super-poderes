import { put, select } from 'redux-saga/effects';
import login from '../../../../utils/src/lib/applicationActions/endpoints/login';
import { Creators as AppActions } from '../ducks/app';

export default function* authentication() {
  const { autenticacao } = yield select(state => state.sdk);
  const bearerToken = yield login(autenticacao);
  yield put(AppActions.setBearerToken(bearerToken));
}
