import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./type";

const initState = {
  count: 1,
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
