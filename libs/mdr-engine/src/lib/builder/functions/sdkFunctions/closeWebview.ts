import { store, errorActions } from '@zup-mgm/mgm-redux-store';
import { ERROR_TYPES } from '@zup-mgm/utils';

declare global {
  interface Window {
    native: {
      requestNativeFeature: (arg1: string, arg2: string) => void;
    };
  }
}

const {
  SDK: { CLOSE_WEBVIEW },
} = ERROR_TYPES;
const { callErrorHandler } = errorActions;

const closeWebview = () => {
  try {
    console.log('Vai tentar chamar o SDK nativo para fechar a webview');
    const { native } = window;
    const jsonProtocol: {
      action: string;
      category: string;
    } = {
      action: 'com.itau.CLOSE_WINDOW',
      category: 'com.itau.category.DEFAULT',
    };

    const jsonString = JSON.stringify(jsonProtocol);
    return native.requestNativeFeature(jsonString, 'responseNativeFeature');
  } catch (error) {
    return store.dispatch(callErrorHandler(error, CLOSE_WEBVIEW));
  }
};

export default closeWebview;
