import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';
import analyticsArchitect from './analyticsArchitect';
import { Action } from './model/Action';

const buildActionParameter = (action, analyticsParam) => {
  return {
    ...action.parameters,
    analytics: analyticsArchitect(analyticsParam),
  }
}

export default function actionsArchitect(actions, analyticsParam) {
  const componentActions = {};

  if (actions) actions.forEach(action => {
    const actionFunction = libFunctions[action.functionName];
    const actionParameter = buildActionParameter(action, analyticsParam);
    componentActions[enumTranslator(action.event)] = new Action(action.event, actionParameter, actionFunction);
  });


  return componentActions;
}