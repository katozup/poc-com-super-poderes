export default function (componentStructure) {
  const { type } = componentStructure;
  if (type) return type;
  return '';
}
