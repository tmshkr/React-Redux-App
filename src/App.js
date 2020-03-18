import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { useSelector } from "react-redux";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tabs from "./components/Tabs";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";

function App() {
  const state = useSelector(state => state);
  const { movieCache, savedList } = state;

  return (
    <Router>
      <SearchBar />
      <main className="main">
        <Tabs />
        <Switch>
          <Route path="/saved">
            <SavedList movieCache={movieCache} savedList={savedList} />
          </Route>
          <Route path={["/search/:term/:page", "/search/:term", "/search"]}>
            <SearchResults />
          </Route>
          <Route exact path="/movies">
            <MovieList movies={movieCache} />
          </Route>
          <Route path="/movies/:id">
            <Movie movieCache={movieCache} savedList={savedList} />
          </Route>
          <Redirect to="/movies" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
