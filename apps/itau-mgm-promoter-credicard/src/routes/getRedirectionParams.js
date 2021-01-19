import getQueryParam from '../util/getQueryParam';

export default function getRedirectionParams(key) {
  return `?${key}=${getQueryParam(key)}`;
}
