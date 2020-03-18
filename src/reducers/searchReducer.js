import { SEARCH_QUERY } from "../actions/types";

const initialState = {
  searchResults: {},
  totalResults: 0
};

export const searchReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    default:
      break;
  }
  return newState;
};
