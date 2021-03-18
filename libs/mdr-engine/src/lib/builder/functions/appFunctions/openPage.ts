export default function (actionParameters) {
  const { url, history } = actionParameters;
  history.push(url);
  return;
}
