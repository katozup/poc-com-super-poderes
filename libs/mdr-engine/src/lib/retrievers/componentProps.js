export default function (componentStructure) {
  const { properties } = componentStructure;
  if (properties) return properties;
  return '';
}