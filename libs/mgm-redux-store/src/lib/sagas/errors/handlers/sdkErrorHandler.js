import { put } from 'redux-saga/effects';

import { ERROR_TYPES } from '@zup-mgm/utils';
import { Creators as ErrorActions } from '../../../ducks/error';

const {
  SDK: { GET_SDK_ITEM },
} = ERROR_TYPES;

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

  switch (whereErrorOccurred) {
    case GET_SDK_ITEM:
      errorConditionsObject.hasCriticalError = false;
      break;
    default:
      break;
  }

  return yield put(setErrorConditions(errorConditionsObject));
}
