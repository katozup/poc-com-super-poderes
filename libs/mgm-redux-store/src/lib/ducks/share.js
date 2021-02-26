export const Types = {
  SHARE_REQUEST: 'share/REQUEST',
  SHARE_SUCCESS: 'share/SUCCESS',
};

const INITIAL_STATE = {};

export default function shareReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHARE_REQUEST:
      return {
        ...state,
        [action.payload.componentId]: { isLoading: true },
      };

    case Types.SHARE_SUCCESS:
      return {
        ...state,
        [action.payload.componentId]: { isLoading: false },
      };

    default:
      return state;
  }
}

export const Creators = {
  shareRequest: (type, buttonIndex, componentId) => ({
    type: Types.SHARE_REQUEST,
    payload: { type, buttonIndex, componentId },
  }),

  shareSuccess: (componentId) => ({
    type: Types.SHARE_SUCCESS,
    payload: { componentId },
  }),
};
