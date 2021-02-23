import { call, put } from 'redux-saga/effects';
import sduiContent from './sduiContent';
import setSdkData from './sdkData';
import authentication from './authentication'
import { createCustomer } from './customer';
import { Creators as AppActions } from '../ducks/app';
import setAnalyticsInformation from './analytics';

const { stopLoading } = AppActions;

export function* initApp() {
  try {
    yield call(setSdkData);
    yield call(authentication);
    yield call(sduiContent);
    yield call(createCustomer);
    yield call(setAnalyticsInformation);
    return yield put(stopLoading());
  } catch (error) {
    //TODO: Chamar saga de erro após implementar
    console.log(error);
  }
}
