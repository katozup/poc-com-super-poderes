import { call, put } from 'redux-saga/effects';

import {
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
import authentication from '../../authentication';
import genericErrorHandler from './genericErrorHandler';

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
const { getReferrals } = CustomerActions;
const { addOneToAutomaticRetryCount } = ErrorActions;
const { shareRequest } = ShareActions;
const { getAdditionalContent } = ContentActions;

export default function* unauthorizedErrorHandler(error, whereErrorOccurred) {
  yield put(addOneToAutomaticRetryCount());

  switch (whereErrorOccurred) {
    case INIT_APP:
      yield put(initApp());
      break;
    case GET_LINK_AND_SHARE:
      yield authentication();
      yield put(shareRequest());
      break;
    case GET_CUSTOMER_REFERRALS:
      yield authentication();
      yield put(getReferrals());
      break;
    case GET_ADDITIONAL_INFO_REWARDS:
      yield authentication();
      yield put(getAdditionalContent(REWARDS_SECTION_ID));
      break;
    case GET_ADDITIONAL_INFO_PROGRAM_REGULATION:
      yield authentication();
      yield put(getAdditionalContent(PROGRAM_REGULATION_SECTION_ID));
      break;
    case GET_ADDITIONAL_INFO_TIPS:
      yield authentication();
      yield put(getAdditionalContent(TIPS_SECTION_ID));
      break;
    default:
      yield call(genericErrorHandler, error, whereErrorOccurred);
      break;
  }
}
