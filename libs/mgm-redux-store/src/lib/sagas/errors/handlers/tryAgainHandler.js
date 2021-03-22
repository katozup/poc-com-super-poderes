import { put, select, call } from 'redux-saga/effects';

import { BUSINESS_RULES, ERROR_TYPES } from '@zup-mgm/utils';
import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';
import { Creators as ShareActions } from '../../../ducks/share';
import { trackGACustomLink } from '../../analytics/customLink';

const { MAX_MANUAL_RETRY } = BUSINESS_RULES;
const {
  ANALYTICS: { GET_GA_CUSTOM_LINK_PAYLOAD },
  FLOW: {
    INIT_APP,
    GET_LINK_AND_SHARE,
  },
} = ERROR_TYPES;
const { initApp } = AppActions;
const { addOneToManualRetryCount } = ErrorActions;
const { shareRequest } = ShareActions;

export default function* tryAgainHandler() {
  const { manualRetryCount, whereErrorOccurred } = yield select(
    state => state.error
  );
  const { cardType } = yield select(state => state.app);
  const { action } = yield select(state => state.app);
  
  const canManualRetry = manualRetryCount < MAX_MANUAL_RETRY;

  if (canManualRetry) {
    yield put(addOneToManualRetryCount());

    switch (whereErrorOccurred) {
      case INIT_APP:
        yield put(initApp(cardType));
        break;
      case GET_LINK_AND_SHARE:
        yield put(shareRequest());
        break;
      case GET_GA_CUSTOM_LINK_PAYLOAD:
        handleCustomLinkTryAgain(action);
        break;
      default:
        break;
    }
  }
}

const handleCustomLinkTryAgain = (action) => {
  const { actionFunction } = action;
  actionFunction(action);
}
