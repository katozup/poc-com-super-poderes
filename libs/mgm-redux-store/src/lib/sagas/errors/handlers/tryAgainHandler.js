import { put, select } from 'redux-saga/effects';

import {
  BUSINESS_RULES,
  ERROR_TYPES,
  REWARDS_SECTION_ID,
  PROGRAM_REGULATION_SECTION_ID,
  TIPS_SECTION_ID,
} from '@zup-mgm/utils';
import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ContentActions } from '../../../ducks/content';
import { Creators as CustomerActions } from '../../../ducks/customer';
import { Creators as ErrorActions } from '../../../ducks/error';
import { Creators as ShareActions } from '../../../ducks/share';

const { MAX_MANUAL_RETRY } = BUSINESS_RULES;
const {
  FLOW: {
    INIT_APP,
    GET_LINK_AND_SHARE,
    GET_CUSTOMER_REFERRALS,
    GET_ADDITIONAL_INFO_REWARDS,
    GET_ADDITIONAL_INFO_PROGRAM_REGULATION,
    GET_ADDITIONAL_INFO_TIPS,
  },
} = ERROR_TYPES;
const { initApp } = AppActions;
const { getAdditionalContent } = ContentActions;
const { getReferrals } = CustomerActions;
const { addOneToManualRetryCount } = ErrorActions;
const { shareRequest } = ShareActions;

export default function* tryAgainHandler() {
  const { manualRetryCount, whereErrorOccurred } = yield select(
    state => state.error
  );
  const { cardType } = yield select(state => state.app);
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
      case GET_CUSTOMER_REFERRALS:
        yield put(getReferrals());
        break;
      case GET_ADDITIONAL_INFO_REWARDS:
        yield put(getAdditionalContent(REWARDS_SECTION_ID));
        break;
      case GET_ADDITIONAL_INFO_PROGRAM_REGULATION:
        yield put(getAdditionalContent(PROGRAM_REGULATION_SECTION_ID));
        break;
      case GET_ADDITIONAL_INFO_TIPS:
        yield put(getAdditionalContent(TIPS_SECTION_ID));
        break;
      default:
        break;
    }
  }
}
