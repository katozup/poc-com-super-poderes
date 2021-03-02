import * as Sentry from '@sentry/browser';
import { call, select } from 'redux-saga/effects';
import { environment } from '@zup-mgm/utils';
import { BUSINESS_RULES, HTTP_STATUS, ERROR_TYPES } from '@zup-mgm/utils';
import extractErrorStatus from '../extractors/extractErrorStatus';
import analyticsErrorHandler from './analyticsErrorHandler';
import genericErrorHandler from './genericErrorHandler';
import sdkErrorHandler from './sdkErrorHandler';
import unauthorizedErrorHandler from './unauthorizedErrorHandler';

const { CRASH_REPORT_ON } = environment;
const { MAX_AUTOMATIC_RETRY } = BUSINESS_RULES;
const { UNAUTHORIZED } = HTTP_STATUS;
const {
  ANALYTICS: { ITAU_TRACK, ZUP_TRACK },
  SDK: { CLOSE_WEBVIEW, GET_SDK_ITEM, GET_COUPON },
} = ERROR_TYPES;

export default function* errorHandler(action) {
  const { error, whereErrorOccurred } = action.payload;
  const errorStatus = extractErrorStatus(error);
  const { automaticRetryCount } = yield select((state) => state.error);
  const isUnauthorizedError = errorStatus === UNAUTHORIZED;
  const canAutomaticRetry = automaticRetryCount < MAX_AUTOMATIC_RETRY;
  const isAnalyticsError =
    whereErrorOccurred === ITAU_TRACK || whereErrorOccurred === ZUP_TRACK;
  const isSdkError =
    whereErrorOccurred === CLOSE_WEBVIEW ||
    whereErrorOccurred === GET_SDK_ITEM ||
    whereErrorOccurred === GET_COUPON;

  if (CRASH_REPORT_ON) Sentry.captureException(error);

  if (isAnalyticsError) {
    return yield call(analyticsErrorHandler, whereErrorOccurred);
  }

  if (isSdkError) {
    return yield call(sdkErrorHandler, whereErrorOccurred);
  }

  if (isUnauthorizedError && canAutomaticRetry) {
    return yield call(unauthorizedErrorHandler, error, whereErrorOccurred);
  }
  return yield call(genericErrorHandler, error, whereErrorOccurred);
}
