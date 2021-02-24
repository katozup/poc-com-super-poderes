import getUserAgentComponents from './getUserAgentComponents';
import versionCompare from './versionCompare';

export default function isAsynchronous() {
  if (window.isAsync !== undefined) {
    return window.isAsync;
  }
  const synchronousIOSAppVersion = '6.1.9';
  const { userAgent } = navigator;
  const userAgentRegExFormat = /([\w&.\-\s]+?=[\w&.\-\s]+?)(?:;|$)/g;
  const valid = userAgentRegExFormat.test(userAgent);

  if (userAgent && valid) {
    const components = getUserAgentComponents(userAgent, userAgentRegExFormat);
    window.isAsync =
      components.os === 'ios' &&
      !(
        versionCompare(components.app_version, synchronousIOSAppVersion) === -1
      );
  } else {
    window.isAsync = false;
  }
  return window.isAsync;
}
