export const Types = {
  ADD_TO_AUTO_RETRY: 'error/ADD_TO_AUTO_RETRY',
  ADD_TO_MANUAL_RETRY: 'error/ADD_TO_MANUAL_RETRY',
  SET_MANUAL_RETRY: 'error/SET_MANUAL_RETRY',

  SET_ERROR_CONDITIONS: 'error/SET_ERROR_CONDITIONS',
  CLEAN_ERROR_CONDITIONS_AND_RETRY_COUNTS:
    'error/CLEAN_ERROR_CONDITIONS_AND_RETRY_COUNTS',

  TRY_AGAIN: 'error/TRY_AGAIN',

  CALL_ERROR_HANDLER: 'error/CALL_ERROR_HANDLER',
};

const INITIAL_STATE = {
  errorStatus: null,
  whereErrorOccurred: '',
  endpointUrl: '',
  hasError: false,
  hasCriticalError: false,
  automaticRetryCount: 0,
  manualRetryCount: 0,
};

export default function errorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_AUTO_RETRY:
      return {
        ...state,
        automaticRetryCount: state.automaticRetryCount + 1,
      };

    case Types.ADD_TO_MANUAL_RETRY:
      return {
        ...state,
        manualRetryCount: state.manualRetryCount + 1,
      };

    case Types.SET_ERROR_CONDITIONS:
      return {
        ...state,
        errorStatus: action.payload.errorConditions.errorStatus,
        whereErrorOccurred: action.payload.errorConditions.whereErrorOccurred,
        endpointUrl: action.payload.errorConditions.endpointUrl,
        hasCriticalError:
          state.hasCriticalError !== true
            ? action.payload.errorConditions.hasCriticalError
            : state.hasCriticalError,
        hasError: true,
      };

    case Types.CLEAN_ERROR_CONDITIONS_AND_RETRY_COUNTS:
      return {
        ...state,
        errorStatus: 200,
        whereErrorOccurred: '',
        endpointUrl: '',
        hasCriticalError: false,
        hasError: false,
        automaticRetryCount: 0,
        manualRetryCount: 0,
      };

    case Types.SET_MANUAL_RETRY:
      return {
        ...state,
        manualRetryCount: action.payload.manualRetryCount,
      };

    default:
      return state;
  }
}

export const Creators = {
  setErrorConditions: errorConditions => ({
    type: Types.SET_ERROR_CONDITIONS,
    payload: { errorConditions },
  }),

  addOneToAutomaticRetryCount: () => ({
    type: Types.ADD_TO_AUTO_RETRY,
  }),

  addOneToManualRetryCount: () => ({
    type: Types.ADD_TO_MANUAL_RETRY,
  }),

  cleanErrorConditionsAndRetryCounts: () => ({
    type: Types.CLEAN_ERROR_CONDITIONS_AND_RETRY_COUNTS,
  }),

  tryAgain: () => ({
    type: Types.TRY_AGAIN,
    payload: {},
  }),

  callErrorHandler: (error, whereErrorOccurred) => ({
    type: Types.CALL_ERROR_HANDLER,
    payload: { error, whereErrorOccurred },
  }),

  setManualRetryCount: (manualRetryCount) => ({
    type: Types.SET_MANUAL_RETRY,
    payload: { manualRetryCount },
  }),
};
