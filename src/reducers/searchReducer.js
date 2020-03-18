import { SEARCH_QUERY, SET_SEARCH_RESULTS } from "../actions/types";

const initialState = {
  searchResults: {},
  totalResults: 0
};

export const searchReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      const { Search, totalResults } = action.payload;
      newState.searchResults = Search;
      newState.totalResults = totalResults;
    default:
      break;
  }
  return newState;
};
