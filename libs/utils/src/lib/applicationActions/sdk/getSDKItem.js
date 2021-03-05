// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { store, errorActions } from '@zup-mgm/mgm-redux-store';
import nativeHelper from './helpers/nativeHelper';
import ERROR_TYPES from '../../constants/ERROR_TYPES';

const {
  SDK: { GET_SDK_ITEM },
} = ERROR_TYPES;

const getSDKItem = async (key) => {
  try {
    let value = await nativeHelper.getMemoryItem(key);

    if (!value || value === null || value.replace(/ /g, '') === '') {
      value = await nativeHelper.getItem(key);
    }
    return value;
  } catch (error) {
    return store.dispatch(
      errorActions.callErrorHandler(`${error} error to get the key ${key}`, GET_SDK_ITEM)
    );
  }
};

export default getSDKItem;
