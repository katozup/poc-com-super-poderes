import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';

const buildCustomLinkParameter = (analytics) => ({
    pageName: analytics.pageName,
    itemClicked: analytics.itemClicked
});

export default function analyticsCustomLinkArchitect(analyticsParam) {

  if(analyticsParam && analyticsParam.event === "CUSTOM_LINK"){
    const cumstomLinkGAFuncion = enumTranslator(analyticsParam.event);
    return {
      analyticsFunction: libFunctions[cumstomLinkGAFuncion],
      analyticsParameter: buildCustomLinkParameter(analyticsParam)
    }
  }

  return;
}