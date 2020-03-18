import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import { fetchMovie } from "../actions";
import MovieCard from "./MovieCard";

function Movie(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movieCache } = props;
  const [error, setError] = useState("");
  const movie = movieCache[id];

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovie(id));
    }
    // eslint-disable-next-line
  }, []);

  if (error) {
    return <Alert color="warning">{error}</Alert>;
  } else if (!movie) {
    return <Alert color="secondary">Loading...</Alert>;
  }

  return <MovieCard movie={movie} />;
}

export default Movie;
