import { call, put } from 'redux-saga/effects';

import { ERROR_TYPES } from '@zup-mgm/utils';
import { Creators as AppActions } from '../../../ducks/app';
import { Creators as ErrorActions } from '../../../ducks/error';
import { Creators as ShareActions } from '../../../ducks/share';
import authentication from '../../authentication';
import genericErrorHandler from './genericErrorHandler';
import { trackGACustomLink } from '../../analytics/customLink';
import trackGAPageLoad from '../../analytics/pageLoad';

const {
  ANALYTICS: {
    GET_GA_PAGELOAD_PAYLOAD,
    GET_GA_CUSTOM_LINK_PAYLOAD,
  },
  FLOW: {
    INIT_APP,
    GET_LINK_AND_SHARE,
  },
} = ERROR_TYPES;
const { initApp } = AppActions;
const { addOneToAutomaticRetryCount } = ErrorActions;
const { shareRequest } = ShareActions;

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
    case GET_GA_CUSTOM_LINK_PAYLOAD:
      yield authentication();
      yield call(trackGACustomLink);
      break;
    case GET_GA_PAGELOAD_PAYLOAD:
      yield authentication();
      yield call(trackGAPageLoad);
      break;
    default:
      yield call(genericErrorHandler, error, whereErrorOccurred);
      break;
  }
}
