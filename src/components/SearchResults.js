import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
import ReactPaginate from "react-paginate";

import { handleSearch } from "../actions";
import MovieList from "./MovieList";

function SearchResults(props) {
  const dispatch = useDispatch();
  const { term, page } = useParams();
  const history = useHistory();

  const { searchResults, totalResults } = useSelector(state => state.search);

  const handlePageClick = ({ selected }) => {
    history.push(`/search/${term}/${selected + 1}`);
  };

  useEffect(() => {
    if (term) {
      dispatch(handleSearch(term, page));
    }
    // eslint-disable-next-line
  }, [history.location]);

  return (
    <div className="search-results">
      {totalResults > 0 && term ? (
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
