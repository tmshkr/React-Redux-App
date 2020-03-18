import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
import { useParams, useHistory, useLocation } from "react-router-dom";
import MovieList from "./MovieList";
import ReactPaginate from "react-paginate";
import key from "../config";
import "./SearchResults.scss";

function SearchResults(props) {
  const location = useLocation();
  const { term, page } = useParams();
  const history = useHistory();

  const [searchResults, setSearchResults] = useState({});
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = (term, page = 1) => {
    const url = `https://www.omdbapi.com/?s=${term}&page=${page}&apikey=${key}`;
    axios.get(url).then(({ data }) => {
      let filtered;
      if (data.Search) {
        filtered = data.Search.filter(movie => movie.Poster !== "N/A");
      }
      setTotalResults(data.totalResults);
      setSearchResults(filtered);
    });
  };

  const handlePageClick = ({ selected }) => {
    history.push(`/search/${term}/${selected + 1}`);
  };

  useEffect(() => {
    if (term) {
      handleSearch(term, page);
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className="search-results">
      {totalResults > 0 ? (
        <>
          <MovieList movies={searchResults} />
          <nav className="pagination" aria-label="Pagination">
            <ReactPaginate
              previousLabel={"‹"}
              previousClassName={"page-item"}
              nextLabel={"›"}
              nextClassName={"page-item"}
              breakLabel={"..."}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              forcePage={Number(page - 1) || 0}
              pageCount={Math.ceil(totalResults / 10)}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </nav>
        </>
      ) : (
        <Alert color="secondary">
          Search for a movie using the search bar and the results will appear
          here
        </Alert>
      )}
    </div>
  );
}

export default SearchResults;
