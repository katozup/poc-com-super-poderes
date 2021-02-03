export default function (componentStructure) {
  const { actions } = componentStructure;
  if (actions) return actions;
  return '';
}
