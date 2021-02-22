export const Types = {
  SET_USER_DATA: 'userData/SET_USER_DATA',
};

const INITIAL_STATE = {
  userData: {}
};

export default function userDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}

export const Creators = {
  userDataReducer: payload => ({
    type: Types.SET_USER_DATA,
    payload
  }),
};
