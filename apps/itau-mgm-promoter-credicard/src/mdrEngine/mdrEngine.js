import componentArchitect from './core/builder/componentArchitect';

export default async function mdrNgin(payload) {
  let reactElementChildren = [];

  for (const child of componentChildrenGetter(payload)) {
    reactElementChildren.push(await mdrNgin(child));
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
  const { type } = componentStructure;
  if (type) return type;
  return '';
}

function componentNameGetter(componentStructure) {
  const { componentName } = componentStructure;
  if (componentName) return componentName;
  return '';
}

function componentPropsGetter(componentStructure) {
  const { properties } = componentStructure;
  if (properties) return properties;
  return '';

}

function componentActionsGetter(componentStructure) {
  const { actions } = componentStructure;
  if (actions) return actions;
  return '';
}

function componentChildrenGetter(componentStructure) {
  const { children } = componentStructure;
  if (children) return children;
  return '';
}