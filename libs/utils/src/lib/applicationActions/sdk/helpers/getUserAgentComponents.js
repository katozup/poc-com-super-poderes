export default function getUserAgentComponents(userAgent, regEx) {
  const kDelimiter = '=';
  const components = {};
  userAgent.match(regEx).forEach(match => {
    const [key, value] = match.split(kDelimiter);
    components[key] = value.replace(/;/g, '');
  });
  return components;
}
