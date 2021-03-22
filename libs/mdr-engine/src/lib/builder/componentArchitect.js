import React from 'react';
import actionsArchitect from './actionsArchitect';
import analyticsPageLoadArchitect from './analyticsPageLoadArchitect';

export default async function componentArchitect(type, component, props, actions, analytics, componentId, children) {
  const reactElement = await reactElementBuilder(type, component, componentId);
  const propsAndActions = {
    ...props,
    componentId,
    ...actionsArchitect(actions, analytics),
    analytics: analyticsPageLoadArchitect(analytics),
  };

  const newReactElement = React.cloneElement(
    reactElement,
    propsAndActions,
    children
  );

  return newReactElement;
}

async function reactElementBuilder(type, component, componentId) {
  const emptyElement = React.createElement('div');
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