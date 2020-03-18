import React from "react";
import { NavLink } from "react-router-dom";

function Tabs(props) {
  return (
    <nav className="tabs">
      <NavLink to="/movies">Browse</NavLink>
      <NavLink to="/saved">Saved</NavLink>
      <NavLink to="/search">Search</NavLink>
    </nav>
  );
}

export default Tabs;
