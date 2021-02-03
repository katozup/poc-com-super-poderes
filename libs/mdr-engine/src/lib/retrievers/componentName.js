export default function (componentStructure) {
  const { componentName } = componentStructure;
  if (componentName) return componentName;
  return '';
}
