export default function componentActions (componentStructure) {
  const { actions } = componentStructure;
  if (actions) return actions;
  return '';
}
