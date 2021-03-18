import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';

const buildPageLoadParameter = (analytics) => ({
  pageName: analytics.pageName
});

export default function analyticsCustomLinkArchitect(analyticsParam) {

  if(analyticsParam && analyticsParam.event === "PAGE_LOAD"){
    const pageLoadGAFuncion = enumTranslator(analyticsParam.event);
    return {
      analyticsFunction: libFunctions[pageLoadGAFuncion],
      analyticsParameter: buildPageLoadParameter(analyticsParam)
    }

  return;
}


}