export const Types = {
  SHOW_MODAL: 'modal/SHOW_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

export const initialState = {
  isModalVisible: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_MODAL: {
      return {
        ...state,
        isModalVisible: true,
        componentId: action.payload.componentId
      };
    }
    case Types.CLOSE_MODAL: {
      return {
        ...state,
        isModalVisible: false,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  showModal: (componentId) => ({
    type: Types.SHOW_MODAL,
    payload: { componentId },
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
