/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import * as Sentry from '@sentry/browser';
import { call, select } from 'redux-saga/effects';
import { BUSINESS_RULES, HTTP_STATUS, ERROR_TYPES, environment } from '@zup-mgm/utils';
import extractErrorStatus from '../extractors/extractErrorStatus';
import analyticsErrorHandler from './analyticsErrorHandler';
import genericErrorHandler from './genericErrorHandler';
import sdkErrorHandler from './sdkErrorHandler';
import unauthorizedErrorHandler from './unauthorizedErrorHandler';

const { CRASH_REPORT_ON } = environment;
const { MAX_AUTOMATIC_RETRY } = BUSINESS_RULES;
const { UNAUTHORIZED } = HTTP_STATUS;
const {
  ANALYTICS: { ITAU_TRACK, GET_GA_PAYLOAD },
  SDK: { CLOSE_WEBVIEW, GET_SDK_ITEM },
} = ERROR_TYPES;

export default function* errorHandler(action) {
  const { error, whereErrorOccurred } = action.payload;

  if (CRASH_REPORT_ON) Sentry.captureException(error);

  if (isAnalyticsError(whereErrorOccurred)) {
    return yield call(analyticsErrorHandler, whereErrorOccurred);
  }

  if (isSdkError(whereErrorOccurred)) {
    return yield call(sdkErrorHandler, whereErrorOccurred);
  }

  if (isUnauthorizedError(error) && canAutomaticRetry()) {
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

function* canAutomaticRetry() {
  const { automaticRetryCount } = yield select(state => state.error);
  return automaticRetryCount < MAX_AUTOMATIC_RETRY;
}

