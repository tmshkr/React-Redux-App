import { ADD_SAVED_MOVIE, REMOVE_SAVED_MOVIE } from "./types";

export const addToSavedList = id => dispatch =>
  dispatch({
    type: ADD_SAVED_MOVIE,
    id
  });

export const deleteFromSavedList = id => dispatch =>
  dispatch({
    type: REMOVE_SAVED_MOVIE,
    id
  });
