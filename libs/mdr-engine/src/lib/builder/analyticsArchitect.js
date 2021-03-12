import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';

const buildCustomLinkParameter = (analytics) => ({
    pageName: analytics.pageName,
    itemClicked: analytics.itemClicked
});

const buildPageLoadParameter = (analytics) => ({
  pageName: analytics.pageName
});

export default function componentAnalytics(analytics) {
  if(analytics.event === "CUSTOM_LINK"){
    const cumstomLinkGAFuncion = enumTranslator(analytics.event);
    return {
      analyticsFunction: libFunctions[cumstomLinkGAFuncion],
      analyticsParameter: buildCustomLinkParameter(analytics)
    }
  }

  if(analytics.event === "PAGE_LOAD"){
    const pageLoadGAFuncion = enumTranslator(analytics.event);
    return {
      analyticsFunction: libFunctions[pageLoadGAFuncion],
      analyticsParameter: buildPageLoadParameter(analytics)
    }
  }

  return;
}