import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tabs from "./components/Tabs";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import initialData from "./data/movies";
import "./App.scss";

function App() {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState(initialData);

  const addToSavedList = id => {
    if (!savedList.includes(id)) {
      setSavedList([...savedList, id]);
    }
  };

  const deleteFromSavedList = id => {
    const filtered = savedList.filter(el => el !== id);
    setSavedList(filtered);
  };

  return (
    <Router>
      <SearchBar />
      <main className="main">
        <Tabs />
        <Switch>
          <Route path="/saved">
            <SavedList movies={movies} savedList={savedList} />
          </Route>
          <Route path={["/search/:term/:page", "/search/:term", "/search"]}>
            <SearchResults />
          </Route>
          <Route exact path="/movies">
            <MovieList movies={movies} />
          </Route>
          <Route path="/movies/:id">
            <Movie
              handleMovies={[movies, setMovies]}
              handleList={[savedList, addToSavedList, deleteFromSavedList]}
            />
          </Route>
          <Redirect to="/movies" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
