import { put } from 'redux-saga/effects';

import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';

const { stopLoading } = AppActions;
const { setErrorConditions } = ErrorActions;

export default function* analyticsErrorHandler(whereErrorOccurred) {
  const errorStatus = '';
  const endpointUrl = '';
  const hasCriticalError = false;

  const errorConditionsObject = {
    errorStatus,
    whereErrorOccurred,
    endpointUrl,
    hasCriticalError,
  };

  yield put(setErrorConditions(errorConditionsObject));
  yield put(stopLoading());
}
