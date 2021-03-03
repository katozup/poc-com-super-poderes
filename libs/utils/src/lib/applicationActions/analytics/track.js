import { environment } from '../../config/environment'

const isDebugModeOn = (environment) => environment.DEBUG_MODE;
const isGoogleAnalyticsOn = (environment) => environment.TURN_GOOGLE_ANALYTICS_ON;

export function track (data) {
  try {
    window.analyticsData = data;
    if (isDebugModeOn(environment)) console.log(data.rule, data);
    if (isGoogleAnalyticsOn(environment)) {
      console.log("vai disparar :)");
      window._frameworkDA.Track();
      console.log("disparouu :)");
    }
  } catch(error) {
    //TODO: Implementar tratamento de erro igual ao repo legado (será feito em outra task)
    console.log(error);
  }
}