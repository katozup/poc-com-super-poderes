import { put } from 'redux-saga/effects';

import extractEndpointUrlWithError from '../extractors/extractEndpointUrlWithError';
import extractErrorStatus from '../extractors/extractErrorStatus';
import { Creators as AnalyticsActions } from '../../../ducks/analytics';
import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';

const { setPage } = AnalyticsActions;
const { stopLoading } = AppActions;
const { setErrorConditions } = ErrorActions;

export default function* genericErrorHandler(error, whereErrorOccurred) {
  const errorStatus = extractErrorStatus(error);
  const endpointUrl = extractEndpointUrlWithError(error);
  const hasCriticalError = true;

  const errorConditionsObject = {
    errorStatus,
    whereErrorOccurred,
    endpointUrl,
    hasCriticalError,
  };

  const errorPageAnalytics = {
    secao: 'MemberGetMember',
    subSecao1: 'IndicarAmigo',
    subSecao2: '',
    subSecao3: '',
  };

  yield put(setPage(errorPageAnalytics));
  yield put(setErrorConditions(errorConditionsObject));
  return yield put(stopLoading());
}
