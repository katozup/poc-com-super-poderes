export const Types = {
  STOP_LOADING: 'app/STOP_LOADING',
  INIT_APP: 'app/INIT_APP',
  SET_BEARERTOKEN: 'app/SET_BEARERTOKEN',
  SET_SDUI_PAYLOAD: 'app/SET_SDUI_PAYLOAD'
};

const INITIAL_STATE = {
  loading: true,
  bearerToken: '',
  sduiPayload: '',
};

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.STOP_LOADING:
      return {
        ...state,
        loading: false,
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

    default:
      return state;
  }
}

export const Creators = {
  stopLoading: () => ({
    type: Types.STOP_LOADING,
    payload: {},
  }),

  initApp: (data, cardListSDK, cartaoTipo) => ({
    type: Types.INIT_APP,
    payload: { data, cardListSDK, cartaoTipo },
  }),

  setBearerToken: bearerToken => ({
    type: Types.SET_BEARERTOKEN,
    payload: { bearerToken },
  }),

  setSduiContent: sduiPayload => ({
    type: Types.SET_SDUI_PAYLOAD,
    payload: { sduiPayload },
  })
};
