import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import "./SavedList.scss";

function SavedList(props) {
  const { movies, savedList } = props;
  return (
    <div className="saved-list">
      {savedList.length > 0 ? (
        <>
          <h3>Saved Movies</h3>
          <ul>
            {savedList.map(imdbID => (
              <li key={imdbID} className="saved-movie">
                <Link to={`/movies/${imdbID}`}>{movies[imdbID].Title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Alert color="secondary">No movies saved</Alert>
      )}
    </div>
  );
}

export default SavedList;
