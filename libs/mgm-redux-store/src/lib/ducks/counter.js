export const Types = {
  ADD_COUNTER: 'counter/ADD_COUNTER',
};

const INITIAL_STATE = {
  counter: 0,
};

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };

    default:
      return state;
  }
}

export const Creators = {
  addCounter: payload => ({
    type: Types.ADD_COUNTER,
    payload: { payload },
  }),
};
