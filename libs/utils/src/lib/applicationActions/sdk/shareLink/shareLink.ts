declare global {
  interface Window {
    native: {
      requestNativeFeature: (arg1: string, arg2: string) => void,
    };
  }
}

export const shareLinkSdk = (shareContent, shareType) => {
  const { native } = window;
  const jsonProtocol: {
    action: string,
    category: string,
    data: string,
  } = {
    action: '',
    category: '',
    data: '',
  };

  switch (shareType) {
    case 'whatsApp':
      jsonProtocol.action = 'com.itau.WHATSAPP_SHARING';
      break;
    default:
      jsonProtocol.action = 'com.itau.OTHER_APP_SHARING';
      break;
  }

  jsonProtocol.category = 'com.itau.category.DEFAULT';
  jsonProtocol.data = `${shareContent.message}`;

  const jsonString = JSON.stringify(jsonProtocol);
  native.requestNativeFeature(jsonString, 'responseNativeFeature');
};

export default shareLinkSdk;
