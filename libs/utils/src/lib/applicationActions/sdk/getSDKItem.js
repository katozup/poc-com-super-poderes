import { Creators as errorActions } from '../../../../../../libs/mgm-redux-store/src/lib/ducks/error';
import { ERROR_TYPES } from '../../constants';
import nativeHelper from './helpers/nativeHelper';
import saga from '@zup-mgm/mgm-redux-store';

const {
  SDK: { GET_SDK_ITEM },
} = ERROR_TYPES;
const { callErrorHandler } = errorActions;

const getSDKItem = async (key) => {
  try {
    let value = await nativeHelper.getMemoryItem(key);

    if (!value || value === null || value.replace(/ /g, '') === '') {
      value = await nativeHelper.getItem(key);
    }
    return value;
  } catch (error) {
    return saga.dispatch(
      callErrorHandler(`${error} error to get the key ${key}`, GET_SDK_ITEM)
    );
  }
};

export default getSDKItem;
