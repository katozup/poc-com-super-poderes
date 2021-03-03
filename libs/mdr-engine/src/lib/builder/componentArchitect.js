import React from 'react';
import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';
import analyticsArchitect from './analyticsArchitect';

export default async function componentArchitect(type, component, props, actions, analytics, componentId, children) {
  const reactElement = await reactElementBuilder(type, component, componentId);
  const propsAndActions = {
    ...props,
    componentId,
    ...actionsBuilder(actions, analytics)
  };
  const newReactElement = React.cloneElement(
    reactElement,
    propsAndActions,
    children
  );

  return newReactElement;
}

async function reactElementBuilder(type, component, componentId) {
  const emptyElement = React.createElement('div'); // creates an empty react element for safe coding
  try {
    const Component = await import(`@zup-mgm/ui-components`).then((defaultComponent) => {
      return defaultComponent[component];
    })
    const reactElement = <Component key={`${type}_${component}_${componentId}`} />;
    if (React.isValidElement(reactElement)){
      return reactElement;
    }
    return emptyElement;
  
  } catch {
    return emptyElement;
  }
}

function actionsBuilder(actions, analytics) {
  // TODO add support to other events
  let componentActions = {};

  if (actions) actions.forEach(action => {
    componentActions[enumTranslator(action.event)] = {
      actionFunction: libFunctions[action.functionName],
      actionEvent: action.event,
      actionParameter: action.parameter,
    };

    componentActions[enumTranslator(action.event)].analytics = analyticsArchitect(analytics);    
  });

  return componentActions;
}