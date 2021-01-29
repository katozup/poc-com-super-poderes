import componentArchitect from './core/builder/componentArchitect';

export default async function mdrNgin(payload) {
  let reactElementChildren = [];

  if (payload) {
    for (const child of componentChildrenGetter(payload)) {
      reactElementChildren.push(await mdrNgin(child));
    }
  }

  // "break case"
  return await componentArchitect(
    componentTypeGetter(payload),
    componentNameGetter(payload),
    componentPropsGetter(payload),
    componentActionsGetter(payload),
    reactElementChildren,
  );
}

function componentTypeGetter(componentStructure) {
  const { type } = componentStructure || '';
  return type;
}

function componentNameGetter(componentStructure) {
  const { componentName } = componentStructure || '';
  return componentName;
}

function componentPropsGetter(componentStructure) {
  const { properties } = componentStructure || '';
  return properties;
}

function componentActionsGetter(componentStructure) {
  const { actions } = componentStructure || '';
  return actions;
}

function componentChildrenGetter(componentStructure) {
  const { children } = componentStructure || [];
  return children;
}