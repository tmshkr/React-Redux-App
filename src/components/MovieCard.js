import React from "react";
import { useDispatch } from "react-redux";

import { addToSavedList, deleteFromSavedList } from "../actions";

function MovieCard(props) {
  const dispatch = useDispatch();
  const { movie, savedList } = props;
  const { imdbID, Title, Director, imdbRating, Actors, Poster, Plot } = movie;

  const isSaved = savedList.includes(imdbID);

  return (
    <div className="movie-card">
      <div>
        <h3>{Title}</h3>
      </div>
      <div>
        <div className="img-wrapper">
          <img src={Poster} alt={Title} />
        </div>
        <div className="movie-info">
          <div className="movie-director">
            Director: <em>{Director}</em>
          </div>
          <div className="movie-metascore">
            IMDB Rating: <strong>{imdbRating}</strong>
          </div>
          <h4>Actors</h4>
          <p>{Actors}</p>
          <h4>Plot</h4>
          <p>{Plot}</p>
          {isSaved ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(deleteFromSavedList(imdbID))}
            >
              Saved
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(addToSavedList(imdbID))}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
