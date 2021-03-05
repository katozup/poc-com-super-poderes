export const Types = {
  SET_CONTENT: 'content/SET_CONTENT',

  GET_ADDITIONAL_CONTENT: 'content/GET_ADDITIONAL_CONTENT',
  SET_ADDITIONAL_CONTENT: 'content/SET_ADDITIONAL_CONTENT',
};

const INITIAL_STATE = {};

export default function contentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_CONTENT:
      return {
        ...state,
        ...action.payload.whiteLabel,
      };

    case Types.SET_ADDITIONAL_CONTENT:
      return {
        ...state,
        icons: { ...state.icons, ...action.payload.additionalContent.icons },
        links: { ...state.links, ...action.payload.additionalContent.links },
        texts: { ...state.texts, ...action.payload.additionalContent.texts },
        images: { ...state.images, ...action.payload.additionalContent.images },
      };

    default:
      return state;
  }
}

export const Creators = {
  setContent: whiteLabel => ({
    type: Types.SET_CONTENT,
    payload: { whiteLabel },
  }),

  getAdditionalContent: sectionId => ({
    type: Types.GET_ADDITIONAL_CONTENT,
    payload: { sectionId },
  }),

  setAdditionalContent: additionalContent => ({
    type: Types.SET_ADDITIONAL_CONTENT,
    payload: { additionalContent },
  }),
};
