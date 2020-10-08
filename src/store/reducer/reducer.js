import { FETCHING_FACT_START, FETCHING_FACT_SUCCESS } from "../actions/actions";

const initialState = {
  fact: "",
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FACT_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_FACT_SUCCESS:
      return {
        ...state,
        fact: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
