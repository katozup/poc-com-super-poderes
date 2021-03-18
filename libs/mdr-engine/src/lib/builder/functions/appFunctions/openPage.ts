import { history } from '@zup-mgm/utils';

export default function (actionParameters) {
  const { url } = actionParameters;
  history.push(url);
  return;
}