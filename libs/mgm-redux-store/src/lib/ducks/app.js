export const Types = {
  STOP_LOADING: 'app/STOP_LOADING',
  START_LOADING: 'app/START_LOADING',
  DISPATCH_PAGE_LOAD: 'app/DISPATCH_PAGE_LOAD',
  STOP_PAGE_LOAD: 'app/STOP_PAGE_LOAD',
  INIT_APP: 'app/INIT_APP',
  SET_BEARERTOKEN: 'app/SET_BEARERTOKEN',
  SET_SDUI_PAYLOAD: 'app/SET_SDUI_PAYLOAD',
  SET_ENVIRONMENT_VARIABLES: 'app/SET_ENVIRONMENT_VARIABLES',
  SET_CARD_TYPE: 'app/SET_CARD_TYPE',
  SET_ACTION: 'app/SET_ACTION',
};

const INITIAL_STATE = {
  loading: true,
  bearerToken: '',
  sduiPayload: '',
  cardType: '',
  action: {},
  pageLoad: {
    PAGE: true,
    MODAL: false,
  },
  pageLoadType: 'PAGE'
};

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    case Types.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case Types.DISPATCH_PAGE_LOAD:
      return {
        ...state,
        pageLoad: {
          [action.payload.pageLoadType]: true,
        },
      };

    case Types.STOP_PAGE_LOAD:
      return {
        ...state,
        pageLoad: {
        [action.payload.pageLoadType]: false,
      },
      pageLoadType: action.payload.pageLoadType,
    };

    case Types.INIT_APP:
      return {
        ...state,
        cardType: action.payload.cardType,
      };

    case Types.SET_BEARERTOKEN:
      return {
        ...state,
        bearerToken: action.payload.bearerToken,
      };

    case Types.SET_SDUI_PAYLOAD:
      return {
        ...state,
        sduiPayload: action.payload.sduiPayload,
      };

    case Types.SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.payload.cardType,
      };

    case Types.SET_ACTION:
      return {
        ...state,
        action: action.payload.action,
      };

    default:
      return state;
  }
}

export const Creators = {
  stopLoading: () => ({
    type: Types.STOP_LOADING,
    payload: {},
  }),

  startLoading: () => ({
    type: Types.START_LOADING,
    payload: {},
  }),

  dispatchPageLoad: (pageLoadType) => ({
    type: Types.DISPATCH_PAGE_LOAD,
    payload: { pageLoadType },
  }),

  stopPageLoad: (pageLoadType) => ({
    type: Types.STOP_PAGE_LOAD,
    payload: { pageLoadType },
  }),

  initApp: (cardType) => ({
    type: Types.INIT_APP,
    payload: { cardType },
  }),

  setBearerToken: (bearerToken) => ({
    type: Types.SET_BEARERTOKEN,
    payload: { bearerToken },
  }),

  setSduiContent: (sduiPayload) => ({
    type: Types.SET_SDUI_PAYLOAD,
    payload: { sduiPayload },
  }),

  setCardType: (cardType) => ({
    type: Types.SET_CARD_TYPE,
    payload: { cardType },
  }),

  setAction: (action) => ({
    type: Types.SET_ACTION,
    payload: { action },
  }),
};
