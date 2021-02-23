declare global {
  interface Window {
    native: {
      requestNativeFeature: (arg1: string, arg2: string) => void,
    };
  }
}

export default function () {

  try {
    const { native } = window;
    const jsonProtocol: {
      action: string,
      category: string,
    } = {
      action: 'com.itau.CLOSE_WINDOW',
      category: 'com.itau.category.DEFAULT',
    };
    
    const jsonString = JSON.stringify(jsonProtocol);
    return native.requestNativeFeature(jsonString, 'responseNativeFeature');
  } catch (error) {
    console.log(error);
  }
}
