/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { call, select } from 'redux-saga/effects';
import { BUSINESS_RULES, HTTP_STATUS, ERROR_TYPES } from '@zup-mgm/utils';
import extractErrorStatus from '../extractors/extractErrorStatus';
import analyticsErrorHandler from './analyticsErrorHandler';
import genericErrorHandler from './genericErrorHandler';
import sdkErrorHandler from './sdkErrorHandler';
import unauthorizedErrorHandler from './unauthorizedErrorHandler';

const { MAX_AUTOMATIC_RETRY } = BUSINESS_RULES;
const { UNAUTHORIZED } = HTTP_STATUS;
const {
  ANALYTICS: { ITAU_TRACK, GET_GA_PAYLOAD },
  SDK: { CLOSE_WEBVIEW, GET_SDK_ITEM },
} = ERROR_TYPES;

export default function* errorHandler(action) {
  const { error, whereErrorOccurred } = action.payload;
  const { automaticRetryCount } = yield select(state => state.error);

  if (isAnalyticsError(whereErrorOccurred)) {
    return yield call(analyticsErrorHandler, whereErrorOccurred);
  }

  if (isSdkError(whereErrorOccurred)) {
    return yield call(sdkErrorHandler, whereErrorOccurred);
  }

  if (isUnauthorizedError(error) && canAutomaticRetry(automaticRetryCount)) {
    return yield call(unauthorizedErrorHandler, error, whereErrorOccurred);
  }
  return yield call(genericErrorHandler, error, whereErrorOccurred);
}

const isAnalyticsError = (whereErrorOccurred) => {
  return whereErrorOccurred === ITAU_TRACK || whereErrorOccurred === GET_GA_PAYLOAD;
}

const isSdkError = (whereErrorOccurred) => {
  return whereErrorOccurred === CLOSE_WEBVIEW || whereErrorOccurred === GET_SDK_ITEM;
}

const isUnauthorizedError = (error) => {
  const errorStatus = extractErrorStatus(error);
  return errorStatus === UNAUTHORIZED;
};

const canAutomaticRetry = (automaticRetryCount) => {
  return automaticRetryCount < MAX_AUTOMATIC_RETRY;
}

