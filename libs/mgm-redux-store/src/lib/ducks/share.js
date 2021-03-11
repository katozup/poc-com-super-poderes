export const Types = {
  SHARE_REQUEST: 'share/REQUEST',
  SHARE_SUCCESS: 'share/SUCCESS',
  SET_TRIGGER_ANALYTICS: 'share/SET_TRIGGER_ANALYTICS',
};

const INITIAL_STATE = {

};

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

    case Types.SET_TRIGGER_ANALYTICS:
      return {
        ...state,
        [action.payload.componentId]: { 
          shouldTriggerAnalytics: action.payload.shouldTriggerAnalytics 
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  shareRequest: (type, componentId) => ({
    type: Types.SHARE_REQUEST,
    payload: { type, componentId },
  }),

  shareSuccess: (componentId) => ({
    type: Types.SHARE_SUCCESS,
    payload: { componentId },
  }),

  setTriggerAnalytics: (shouldTriggerAnalytics, componentId) => ({
    type: Types.SET_TRIGGER_ANALYTICS,
    payload: { shouldTriggerAnalytics, componentId },
  }),
};
