/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, put, select } from 'redux-saga/effects';
import { getSduiContent, getDnDefault, HTTP_STATUS } from '@zup-mgm/utils';
import { Creators as AppActions } from '../ducks/app';
import { appActions } from '../ducks/creatorsActions';

export default function* sduiContent() {
  const { chpras, dn, cashback } = yield select((state) => state.sdk);
  try {
    const { response, bearerToken } = yield getSduiContent(
      dn,
      chpras,
      'Default',
      cashback,
      null
    );
    yield put(AppActions.setSduiContent(response));
    yield put(appActions.setBearerToken(bearerToken));
  } catch (error) {
    if (error.response.status === HTTP_STATUS.NOT_FOUND) {
      yield call(getDefaultContent);
    } else {
      throw error;
    }
  }
}

export function* getDefaultContent() {
  const { response, bearerToken } = yield getDnDefault();
  yield put(AppActions.setBearerToken(bearerToken));
  yield put(AppActions.setSduiContent(response));
}
