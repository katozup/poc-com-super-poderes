import { put } from 'redux-saga/effects';

import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';
import { ERROR_TYPES, BUSINESS_RULES } from '@zup-mgm/utils';

const { stopLoading } = AppActions;
const { setErrorConditions, setManualRetryCount } = ErrorActions;
const {
  ANALYTICS: { GET_GA_PAYLOAD }, 
} = ERROR_TYPES;
const { MAX_MANUAL_RETRY } = BUSINESS_RULES;

export default function* analyticsErrorHandler(whereErrorOccurred) {
  const errorStatus = '';
  const endpointUrl = '';
  let hasCriticalError = false;

  if(whereErrorOccurred === GET_GA_PAYLOAD) {
    hasCriticalError = true;
    yield put(setManualRetryCount(MAX_MANUAL_RETRY));
  }

  const errorConditionsObject = {
    errorStatus,
    whereErrorOccurred,
    endpointUrl,
    hasCriticalError,
  };

  yield put(setErrorConditions(errorConditionsObject));
  yield put(stopLoading());
}
