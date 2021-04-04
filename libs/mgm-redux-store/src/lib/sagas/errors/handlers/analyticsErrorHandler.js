import { call, put, select } from 'redux-saga/effects';

import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';
import { ERROR_TYPES } from '@zup-mgm/utils';
import trackGAPageLoad from '../../analytics/pageLoad';

const { stopLoading } = AppActions;
const { setErrorConditions } = ErrorActions;
const {
  ANALYTICS: { GET_GA_CUSTOM_LINK_PAYLOAD },
} = ERROR_TYPES;

export default function* analyticsErrorHandler(whereErrorOccurred) {
  const errorStatus = '';
  const endpointUrl = '';
  let hasCriticalError = false;

  const errorConditionsObject = {
    errorStatus,
    whereErrorOccurred,
    endpointUrl,
    hasCriticalError,
  };

  if(whereErrorOccurred === GET_GA_CUSTOM_LINK_PAYLOAD) {
    errorConditionsObject.hasCriticalError = true;
  }

  yield put(setErrorConditions(errorConditionsObject));
  if(whereErrorOccurred === GET_GA_CUSTOM_LINK_PAYLOAD) {
    const { manualRetryCount } = yield select(state => state.error);

    if(manualRetryCount < 1) {
      yield call(trackGAPageLoad);
    }
  }
  yield put(stopLoading());
}
