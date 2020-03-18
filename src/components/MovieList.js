import React from "react";
import MoviePoster from "./MoviePoster";

function MovieList(props) {
  const { movieCache } = props;
  return (
    <div className="movie-list">
      {Object.values(movieCache).map(movie => (
        <MoviePoster key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
