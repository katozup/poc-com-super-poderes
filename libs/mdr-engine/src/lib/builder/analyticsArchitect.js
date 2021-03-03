import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';

const buildAnalyticsParameter = (analytics) => ({
    pageName: analytics.pageName,
    itemClicked: analytics.itemClicked
});

export default function componentAnalytics(analytics) {
  if(analytics.event === "CUSTOM_LINK"){
    const cumstomLinkGAFuncion = enumTranslator(analytics.event);
    return {
      analyticsFunction: libFunctions[cumstomLinkGAFuncion],
      analyticsParameter: buildAnalyticsParameter(analytics)
    }
  }
  return;
}