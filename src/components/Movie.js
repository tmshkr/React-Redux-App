import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { Alert } from "reactstrap";
import key from "../config";
import MovieCard from "./MovieCard";

function Movie(props) {
  const match = useRouteMatch();
  const { id } = match.params;
  const { handleList, handleMovies } = props;
  const [movies, setMovies] = handleMovies;
  const [error, setError] = useState("");
  const movie = movies[id];

  useEffect(() => {
    if (!movie) {
      const url = `https://www.omdbapi.com/?i=${id}&apikey=${key}`;
      axios.get(url).then(({ data }) => {
        if (data.Error) {
          return setError(data.Error);
        }
        const copy = { ...movies };
        copy[id] = data;
        setMovies(copy);
      });
    }
    // eslint-disable-next-line
  }, []);

  if (error) {
    return <Alert color="warning">{error}</Alert>;
  } else if (!movie) {
    return <Alert color="secondary">Loading...</Alert>;
  }

  return <MovieCard movie={movie} handleList={handleList} />;
}

export default Movie;
