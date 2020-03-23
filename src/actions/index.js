import axios from "axios";
import key from "../config";

import {
  ADD_TO_MOVIE_CACHE,
  ADD_SAVED_MOVIE,
  REMOVE_SAVED_MOVIE,
  FETCH_MOVIE,
  SEARCH_QUERY,
  SET_SEARCH_RESULTS
} from "./types";

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

export const fetchMovie = id => dispatch => {
  dispatch({
    type: FETCH_MOVIE,
    id
  });
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${key}`;
  axios.get(url).then(({ data }) => {
    if (data.Error) {
      return console.dir(data.Error);
    }
    dispatch({
      type: ADD_TO_MOVIE_CACHE,
      id,
      payload: data
    });
  });
};

export const handleSearch = (term, page = 1) => dispatch => {
  dispatch({
    type: SEARCH_QUERY,
    term
  });
  const url = `https://www.omdbapi.com/?s=${term}&page=${page}&apikey=${key}`;
  axios.get(url).then(({ data }) => {
    console.log(data);
    dispatch({
      type: SET_SEARCH_RESULTS,
      payload: data
    });
  });
};
