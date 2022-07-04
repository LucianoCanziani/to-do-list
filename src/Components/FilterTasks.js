import React from "react";
import { NavLink } from "react-router-dom";

const FilterTasks = () => {
  return (
    <nav  className="filter-nav">
      <NavLink className="filter-btn all-btn" activeclassname="active" to="/">
        All
      </NavLink>
      <NavLink
        className="filter-btn uncomplete-btn"
        activeclassname="active"
        to={"/lista/incompletas"}
      >
        Uncompleted
      </NavLink>
      <NavLink
        className="filter-btn complete-btn"
        activeclassname="active"
        to={"/lista/completadas"}
      >
        Completed
      </NavLink>
    </nav>
  );
};

export default FilterTasks;
