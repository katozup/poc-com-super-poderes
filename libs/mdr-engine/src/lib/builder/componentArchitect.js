import React from 'react';
import libFunctions from './functions';

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
}

async function reactElementBuilder(type, component) {
  // ! change import to lib and remove "test_components" after merging with components lib branch
  const Component = await import(`./test_components/${type}/${component}`).then(component=>{
    return component.default;
  });
  const element = <Component></Component>;

  if (React.isValidElement(element)) return element;
  return React.createElement('div'); // creates an empty react element for safe coding
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
