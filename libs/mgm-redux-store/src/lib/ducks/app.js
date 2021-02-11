export const Types = {
  STOP_LOADING: 'app/STOP_LOADING',
  APP_INIT: 'app/APP_INIT',
  SET_THEME: 'app/SET_THEME',
  SET_BEARERTOKEN: 'app/SET_BEARERTOKEN',
};

const INITIAL_STATE = {
  theme: '',
  loading: true,
  bearerToken: '',
};

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_THEME:
      return {
        ...state,
        theme: action.payload.data,
      };

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

    default:
      return state;
  }
}

export const Creators = {
  setTheme: data => ({
    type: Types.SET_THEME,
    payload: { data },
  }),

  stopLoading: () => ({
    type: Types.STOP_LOADING,
    payload: {},
  }),

  appInit: (data, cardListSDK, cartaoTipo) => ({
    type: Types.APP_INIT,
    payload: { data, cardListSDK, cartaoTipo },
  }),

  setBearerToken: bearerToken => ({
    type: Types.SET_BEARERTOKEN,
    payload: { bearerToken },
  }),
};
