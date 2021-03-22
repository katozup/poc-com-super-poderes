import { put, call, select } from 'redux-saga/effects';

import extractEndpointUrlWithError from '../extractors/extractEndpointUrlWithError';
import extractErrorStatus from '../extractors/extractErrorStatus';
import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';
import trackGAPageLoad from '../../analytics/pageLoad';

const { stopLoading } = AppActions;
const { setErrorConditions } = ErrorActions;

export default function* genericErrorHandler(error, whereErrorOccurred) {
  const errorStatus = extractErrorStatus(error);
  const endpointUrl = extractEndpointUrlWithError(error);
  const hasCriticalError = true;
  const { manualRetryCount } = yield select(state => state.error);

  const errorConditionsObject = {
    errorStatus,
    whereErrorOccurred,
    endpointUrl,
    hasCriticalError,
  };

  yield put(setErrorConditions(errorConditionsObject));
  if(manualRetryCount < 1) {
    yield call(trackGAPageLoad);
  }
  return yield put(stopLoading());
}