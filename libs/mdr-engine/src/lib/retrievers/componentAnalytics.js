export default function (componentStructure) {
  const { analytics } = componentStructure;
  if (analytics) return analytics;
  return '';
}