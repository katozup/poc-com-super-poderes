import { call, put, select } from 'redux-saga/effects';
import { getSduiContent, getDnDefault} from '@zup-mgm/utils';
import { Creators as AppActions } from '../ducks/app';
import { appActions } from '../ducks/creatorsActions';

export default function* sduiContent() {
  const { bearerToken } = yield select((state) => state.app);
  const { chpras, dn } = yield select((state) => state.sdk);

  try {
    const sduiPayload = yield getSduiContent(
      dn,
      chpras,
      'Default',
      true,
      bearerToken
    );
    yield put(AppActions.setSduiContent(sduiPayload.data));
    const newBearerToken = sduiPayload.headers['x-access-token'];
    yield put(appActions.setBearerToken(newBearerToken));
  } catch (error) {
    yield call(getDefaultContent);
  }
}

export function* getDefaultContent() {
  const { response, bearerToken } = yield getDnDefault();
  yield put(AppActions.setBearerToken(bearerToken));
  yield put(AppActions.setSduiContent(response));
}
