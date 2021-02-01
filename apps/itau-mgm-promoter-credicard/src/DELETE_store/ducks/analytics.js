export const Types = {
  ADD_PRODUCT: 'analytics/ADD_PRODUCT',
  SET_CUSTOM: 'analytics/SET_CUSTOM',
};

const INITIAL_STATE = {
  product: {
    items: [],
    event: 'prodView',
  },
};

export default function analyticsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          items: [...state.product.items, action.payload.item],
        },
      };

    case Types.SET_CUSTOM:
      return {
        ...state,
        custom: {
          ...action.payload.custom,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  addProduct: item => ({
    type: Types.ADD_PRODUCT,
    payload: { item },
  }),

  setCustom: custom => ({
    type: Types.SET_CUSTOM,
    payload: { custom },
  }),
};
