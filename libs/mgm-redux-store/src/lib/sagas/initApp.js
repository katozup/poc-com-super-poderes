import { call, put } from 'redux-saga/effects';
import sduiContent from './sduiContent';
import setSdkData from './sdkData';
import authentication from './authentication';
import trackGAPageLoad from './analytics/pageLoad';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ERROR_TYPES } from '@zup-mgm/utils';
import { create as createCustomer } from './customer';
import { Creators as AppActions } from '../ducks/app';
import { Creators as ErrorActions } from '../ducks/error';

const { stopLoading } = AppActions;
const {
  FLOW: { INIT_APP },
} = ERROR_TYPES;
const { cleanErrorConditionsAndRetryCounts, callErrorHandler } = ErrorActions;

export function* initApp() {
  try {
    yield call(setSdkData);
    yield call(authentication);
    yield call(sduiContent);
    yield call(createCustomer);
    yield call(trackGAPageLoad);
    yield put(cleanErrorConditionsAndRetryCounts());
    return yield put(stopLoading());
  } catch (error) {
    return yield put(callErrorHandler(error, INIT_APP));
    // yield call(trackGAPageLoad, INIT_APP);
  }
}
