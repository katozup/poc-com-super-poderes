import React from 'react';
import libFunctions from './functions';

export default async function componentArchitect(type, component, props, actions, children) {
  const reactElement = await reactElementBuilder(type, component);
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

async function reactElementBuilder(type, component) {
  const Component = await import(`@zup-mgm/ui-components`).then((defaultComponent) => {
    return defaultComponent[component];
  })
  const element = <Component></Component>;
  return element;
}

function propsBuilder(props) {
  let componentProps = {};
  if (props) props.forEach(prop => {
    componentProps[prop.key] = prop.value;
  });

  return componentProps;
}

function actionsBuilder(actions) {
  // TODO add support to other events
  // ? probably change this part to make the repo ENUM compatible
  let componentActions = {};
  if (actions) actions.forEach(action => {
    componentActions[action.event] = {
      actionFunction: libFunctions[action.functionName],
      actionEvent: action.event,
      actionParameter: action.parameter,
    };
  });

  return componentActions;
}
