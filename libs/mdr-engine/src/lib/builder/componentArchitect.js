import React from 'react';
import libFunctions from './functions';
import enumTranslator from '../helpers/enumTranslator';

export default async function componentArchitect(type, component, props, actions, componentId, children) {
  const reactElement = await reactElementBuilder(type, component, componentId);
  const propsAndActions = {
    ...props,
    ...actionsBuilder(actions)
  };
  const newReactElement = React.cloneElement(
    reactElement,
    propsAndActions,
    children
  );

  return newReactElement;
}

async function reactElementBuilder(type, component, componentId) {
  // ! change import to lib and remove "test_components" after merging with components lib branch
  try {
    const Component = await import(`./test_components/${type}/${component}`).then(component=>{
      return component.default;
    });
    const element = <Component key={`${type}_${component}_${componentId}`} />;
    if (React.isValidElement(element)) return element;
  } catch {
    return React.createElement('div'); // creates an empty react element for safe coding
  }

}

function actionsBuilder(actions) {
  // TODO add support to other events
  let componentActions = {};

  if (actions) actions.forEach(action => {
    componentActions[enumTranslator(action.event)] = {
      actionFunction: libFunctions[action.functionName],
      actionEvent: action.event,
      actionParameter: action.parameter,
    };
  });

  return componentActions;
}
