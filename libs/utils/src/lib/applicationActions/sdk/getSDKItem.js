import nativeHelper from './helpers/nativeHelper';

const getSDKItem = async (key) => {
  try {
    let value = await nativeHelper.getMemoryItem(key);

    if (!value || value === null || value.replace(/ /g, '') === '') {
      value = await nativeHelper.getItem(key);
    }
    return value;
  } catch (error) {
    console.log(error);
  }
};

export default getSDKItem;
