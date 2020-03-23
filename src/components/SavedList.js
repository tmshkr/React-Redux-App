import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

function SavedList(props) {
  const { movieCache, savedList } = props;
  return (
    <div className="saved-list">
      {savedList.length > 0 ? (
        <>
          <h3>Saved Movies</h3>
          <ul>
            {savedList.map(imdbID => (
              <li key={imdbID} className="saved-movie">
                <Link to={`/movies/${imdbID}`}>{movieCache[imdbID].Title}</Link>
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
