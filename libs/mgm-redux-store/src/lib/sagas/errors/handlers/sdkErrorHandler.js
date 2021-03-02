import { put } from 'redux-saga/effects';

import { ERROR_TYPES } from '@zup-mgm/utils';
import { Creators as AnalyticsActions } from '../../../ducks/analytics';
import { Creators as ErrorActions } from '../../../ducks/error';

const {
  SDK: { GET_SDK_ITEM },
} = ERROR_TYPES;
const { setPage } = AnalyticsActions;

const { setErrorConditions } = ErrorActions;

export default function* sdkErrorHandler(whereErrorOccurred) {
  const errorStatus = '';
  const endpointUrl = '';
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

  switch (whereErrorOccurred) {
    case GET_SDK_ITEM:
      errorConditionsObject.hasCriticalError = false;
      break;
    default:
      break;
  }

  yield put(setPage(errorPageAnalytics));
  return yield put(setErrorConditions(errorConditionsObject));
}
