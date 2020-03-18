import React from "react";
import MoviePoster from "./MoviePoster";
import "./MovieList.scss";

function MovieList(props) {
  const { movies } = props;
  return (
    <div className="movie-list">
      {Object.values(movies).map(movie => (
        <MoviePoster key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
