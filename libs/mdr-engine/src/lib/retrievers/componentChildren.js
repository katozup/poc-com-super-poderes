export default function (componentStructure) {
  const { children } = componentStructure;
  if (children) return children;
  return '';
}
