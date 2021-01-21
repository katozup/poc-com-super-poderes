import React from 'react';
import functionsLib from '../../libs/functions';

export default async function componentArchitect(type, component, props, actions, children) {
  const reactElement = await reactElementBuilder(type, component);
  const propsAndActions = {
    ...propsBuilder(props),
    ...actionsBuilder(actions)
  };
  const newReactElement = React.cloneElement(
    reactElement,
    propsAndActions,
    children
  );

  return newReactElement;
};

async function reactElementBuilder(type, component) {
  // TODO add validation of components before returning
  const Component = await import(`../../../components/${type}/${component}`).then(component=>{
    return component.default;
  });
  const element = <Component></Component>;

  return element;
};

function propsBuilder(props) {
  let componentProps = {};
  if (props) props.forEach(prop => {
    componentProps[prop.key] = prop.value;
  });

  return componentProps;
};

function actionsBuilder(actions) {
  // TODO add support to other events
  // TODO function handler should be an entity itself
  let componentActions = {};
  if (actions) actions.forEach(action => {
    componentActions[action.event] = {
      actionFunction: functionsLib[action.functionName],
      actionEvent: action.event,
      actionParameter: action.parameter,
    };
  });

  return componentActions;
};
