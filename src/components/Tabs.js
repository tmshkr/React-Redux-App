import React from "react";
import { NavLink } from "react-router-dom";
import "./Tabs.scss";

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
