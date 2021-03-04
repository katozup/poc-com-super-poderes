import nativeHelper from './helpers/nativeHelper';
import store from '@zup-mgm/mgm-redux-store';

const getSDKItem = async (key) => {
  try {
    let value = await nativeHelper.getMemoryItem(key);

    if (!value || value === null || value.replace(/ /g, '') === '') {
      value = await nativeHelper.getItem(key);
    }
    return value;
  } catch (error) {
    return store.dispatch(
      callErrorHandler(`${error} error to get the key ${key}`, GET_SDK_ITEM)
    );
  }
};

export default getSDKItem;
