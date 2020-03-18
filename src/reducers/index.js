import {
  ADD_TO_MOVIE_CACHE,
  ADD_SAVED_MOVIE,
  REMOVE_SAVED_MOVIE
} from "../actions/types";
import movieCache from "../data/movies";

const initialState = {
  savedList: [],
  movieCache
};

export const movieReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TO_MOVIE_CACHE:
      newState.movieCache[action.id] = action.payload;
      break;
    case ADD_SAVED_MOVIE:
      newState.savedList.push(action.id);
      break;
    case REMOVE_SAVED_MOVIE:
      const filtered = newState.savedList.filter(id => id !== action.id);
      newState.savedList = filtered;
      break;
    default:
      break;
  }
  return newState;
};
