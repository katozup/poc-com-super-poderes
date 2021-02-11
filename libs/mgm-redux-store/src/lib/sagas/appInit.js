import { call, put } from 'redux-saga/effects';

import { ERROR_TYPES } from '../../constants';
import { Creators as AppActions } from '../ducks/app';
import { Creators as ErrorActions } from '../ducks/error';
// import setAnalyticsInformation from './analytics';
// import authentication from './authentication';
// import { getContent } from './content';
// import { createCustomer } from './customer';

const {
  FLOW: { INIT_APP },
} = ERROR_TYPES;
const { cleanErrorConditionsAndRetryCounts, callErrorHandler } = ErrorActions;
const { stopLoading } = AppActions;

export function* initApp() {
  try {
    // pegar dados do user (mockado e sdk)
    // autenticar
    // bater no payload do sdui e salvar conteudo (ver se vale a pena deixar aqui ou colocar no index do app memo)
    // bater no criar customer
    // bater no payload de analytics (implementar na task seguinte)
    return yield put(stopLoading());
  } catch (error) {
    // return yield put(callErrorHandler(error, INIT_APP));
    console.log(error);
  }
}
