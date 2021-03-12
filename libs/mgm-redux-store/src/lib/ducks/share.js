import { Share } from './model/Share';

export const Types = {
  SHARE_REQUEST: 'share/REQUEST',
  SHARE_SUCCESS: 'share/SUCCESS',
};

const INITIAL_STATE = {

};

export default function shareReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHARE_REQUEST:
      return {
        ...state,
        [action.payload.componentId]: action.payload.share,
      };

    case Types.SHARE_SUCCESS:
      return {
        ...state,
        [action.payload.componentId]: action.payload.share,
      };

    default:
      return state;
  }
}

export const Creators = {
  shareRequest: (type, componentId) => ({
    type: Types.SHARE_REQUEST,
    payload: {
      componentId,
      share: new Share(type, true),
    },
  }),

  shareSuccess: (type, componentId) => ({
    type: Types.SHARE_SUCCESS,
    payload: {
      componentId,
      share: new Share(type, false),
    },
  }),
};
