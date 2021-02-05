// TODO implementar o saga com a chamada do endpoint de geracao de link antes de finalizar a task

const sharingLinkSDK = (shareContent, shareType) => {
  const { native } = window;
  const jsonProtocol = {};

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

export default sharingLinkSDK;
