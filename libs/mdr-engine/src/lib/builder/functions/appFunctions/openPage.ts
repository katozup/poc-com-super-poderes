import { history } from '@zup-mgm/utils';

export default function (url) {
  history.push(url);
  return;
}
