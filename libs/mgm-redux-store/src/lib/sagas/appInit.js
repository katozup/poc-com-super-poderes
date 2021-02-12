import { put } from 'redux-saga/effects';

// import { ERROR_TYPES } from '../../constants';
import { Creators as AppActions } from '../ducks/app';
// import { Creators as ErrorActions } from '../ducks/error';
// import setAnalyticsInformation from './analytics';
// import authentication from './authentication';
import sduiContent from './sduiContent';
// import { createCustomer } from './customer';

const { stopLoading } = AppActions;

export function* appInit() {
  // TODO remover console abaixo apos implementar o saga de init
  console.log('Saga do App init')
  try {
    // pegar dados do user (mockado e sdk)
    // autenticar
    // pegar dados do sdui
    // bater no criar customer
    // bater no payload de analytics (implementar na task seguinte)
    yield sduiContent();
    return yield put(stopLoading());
  } catch (error) {
    // return yield put(callErrorHandler(error, INIT_APP));
    console.log(error);
  }
}
