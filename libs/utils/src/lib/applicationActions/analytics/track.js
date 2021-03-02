import { environment } from '../../config/environment'

const isDebugModeOn = (environment) => environment.DEBUG_MODE;
const isGoogleAnalyticsOn = (environment) => environment.TURN_GOOGLE_ANALYTICS_ON;

export default function track (data) {
  try {
    window.analyticsData = teste;
    if (isDebugModeOn(environment)) console.log(teste.rule, teste);
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