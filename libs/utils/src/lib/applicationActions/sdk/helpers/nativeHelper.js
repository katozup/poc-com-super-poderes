/* eslint-disable */
import isAsynchronous from './isAsynchronous';

const nativeHelper = {
  callback: (methodName, resolve) => {
    const hash = Math.floor(Math.random() * +new Date());
    const callbackName = `${methodName}_${hash}`;
    window[callbackName] = (key, value) => {
      resolve(value);
    };
    return callbackName;
  },

  getItem: async key => {
    if (isAsynchronous()) {
      return await new Promise(resolve => {
        window.native.getItem(key, nativeHelper.callback('getItem', resolve));
      });
    }
    return window.native.getItem(key);
  },

  getMemoryItem: async key => {
    if (isAsynchronous()) {
      return await new Promise(resolve => {
        window.native.getMemoryItem(
          key,
          nativeHelper.callback('getMemoryItem', resolve)
        );
      });
    }
    return window.native.getMemoryItem(key);
  },
};

export default nativeHelper;
