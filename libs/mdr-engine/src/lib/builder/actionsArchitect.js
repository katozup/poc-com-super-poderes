import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';
import analyticsArchitect from './analyticsArchitect';

export default function actionsArchitect(actions, analytics) {
  let componentActions = {};

  if (actions) actions.forEach(action => {
    componentActions[enumTranslator(action.event)] = {
      actionFunction: libFunctions[action.functionName],
      actionEvent: action.event,
      actionParameter: action.parameter,
    };

    componentActions[enumTranslator(action.event)].analytics = {
      customLink: analyticsArchitect(analytics),
    }
  });

  if(analytics && analytics.event === "PAGE_LOAD"){
    componentActions.analytics = {
      pageLoad: analyticsArchitect(analytics),
    };
  }

  return componentActions;
}