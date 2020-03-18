import React from "react";
import { useHistory } from "react-router-dom";

function MoviePoster(props) {
  const history = useHistory();
  const { imdbID, Title, Poster } = props.movie;
  return (
    <div
      className="movie-poster"
      onClick={() => history.push(`/movies/${imdbID}`)}
    >
      <h3>{Title}</h3>
      <img src={Poster} alt={Title} />
    </div>
  );
}

export default MoviePoster;
