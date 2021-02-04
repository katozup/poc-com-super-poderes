export default function (componentStructure) {
  const { componentId } = componentStructure;
  if (componentId) return componentId;
  return '';
}
