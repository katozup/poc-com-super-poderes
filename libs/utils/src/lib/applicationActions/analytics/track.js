import { environment } from '../../config/environment'
import { store, errorActions, analyticsActions } from '@zup-mgm/mgm-redux-store';
import { ERROR_TYPES } from '@zup-mgm/utils';

const {
  ANALYTICS: { ITAU_TRACK },
} = ERROR_TYPES;

const isDebugModeOn = (environment) => environment.DEBUG_MODE;
const isGoogleAnalyticsOn = (environment) => environment.TURN_GOOGLE_ANALYTICS_ON;

export const track = (data) => {
  try {
    window.analyticsData = data;
    if (isDebugModeOn(environment)) console.log(data.rule, data);
    if (isGoogleAnalyticsOn(environment)) {
      window._frameworkDA.Track();
    }
    analyticsActions.setTriggerPageLoadGA(true);
  } catch(error) {
    store.dispatch(errorActions.callErrorHandler(error, ITAU_TRACK));
  }
}