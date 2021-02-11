export const Types = {
  SHARE_REQUEST: 'share/REQUEST',
  SHARE_SUCCESS: 'share/SUCCESS',
};

const INITIAL_STATE = {
  button: [{ loading: false }, { loading: false }],
};

export default function shareReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHARE_REQUEST:
      return {
        ...state,
        button: state.button.map((_, index) =>
          index === action.payload.buttonIndex
            ? { loading: true }
            : { loading: false }
        ),
      };

    case Types.SHARE_SUCCESS:
      return {
        ...state,
        button: state.button.map(() => false),
      };

    default:
      return state;
  }
}

export const Creators = {
  shareRequest: (type, buttonIndex, gatewayAppKey) => ({
    type: Types.SHARE_REQUEST,
    payload: { type, buttonIndex, gatewayAppKey },
  }),

  shareSuccess: () => ({
    type: Types.SHARE_SUCCESS,
  }),
};
