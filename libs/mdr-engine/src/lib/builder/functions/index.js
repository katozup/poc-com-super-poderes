import closeWebview from './sdkFunctions/closeWebview';
import shareLink from './sdkFunctions/shareLink';
import setSdkData from './sdkFunctions/sdkData';
import trackCustomLink from './appFunctions/trackCustomLink';
import trackPageLoad from './appFunctions/trackPageLoad';
import openModal from './appFunctions/openModal';
import closeModal from './appFunctions/closeModal';
import navigationBack from './appFunctions/navigationBack'

const libFunctions = {
  closeWebview,
  shareLink,
  setSdkData,
  trackCustomLink,
  trackPageLoad,
  openModal,
  closeModal,
  navigationBack
}

export default libFunctions;
