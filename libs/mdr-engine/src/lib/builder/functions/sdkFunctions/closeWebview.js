export default function () {
  try {
    const { native } = window;
    const jsonProtocol = {};
    jsonProtocol.action = 'com.itau.CLOSE_WINDOW';
    jsonProtocol.category = 'com.itau.category.DEFAULT';

    const jsonString = JSON.stringify(jsonProtocol);
    return native.requestNativeFeature(jsonString, 'responseNativeFeature');
  } catch (error) {
    console.log(error);
  }
}
