export const Types = {
  SET_SDK_DATA: 'sdk/SET_SDK_DATA',
};

const INITIAL_STATE = {};

export default function sdkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SDK_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export const Creators = {
  sdkReducer: (payload) => ({
    type: Types.SET_SDK_DATA,
    payload,
  }),
};
