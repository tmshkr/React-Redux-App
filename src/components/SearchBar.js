import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${searchText}`);
  };

  return (
    <header id="searchbar">
      <nav>
        <Link to="/">
          <h1 className="title">OMDb Explorer</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="info">Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </nav>
    </header>
  );
}

export default SearchBar;
