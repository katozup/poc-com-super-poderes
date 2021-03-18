import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';
import { Analytics } from './model/Analytics';

const buildCustomLinkParameter = (analytics) => ({
    pageName: analytics.pageName,
    itemClicked: analytics.itemClicked
});

const buildPageLoadParameter = (analytics) => ({
  pageName: analytics.pageName
});

export default function componentAnalytics(analyticsParam): Analytics {
  const analytics = new Analytics();

  if(analyticsParam && analyticsParam.event === "CUSTOM_LINK"){
    const cumstomLinkGAFuncion = enumTranslator(analyticsParam.event);
    analytics.customLink = {
      analyticsFunction: libFunctions[cumstomLinkGAFuncion],
      analyticsParameter: buildCustomLinkParameter(analyticsParam)
    }
  }

  if(analyticsParam && analyticsParam.event === "PAGE_LOAD"){
    const pageLoadGAFuncion = enumTranslator(analyticsParam.event);
    analytics.pageLoad = {
      analyticsFunction: libFunctions[pageLoadGAFuncion],
      analyticsParameter: buildPageLoadParameter(analyticsParam)
    }
  }

  return analytics;
}