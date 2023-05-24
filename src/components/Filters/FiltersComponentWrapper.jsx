import React from "react";
import SearchFilter from "./SearchFilter";
import YearFilter from "./YearFilter";
import "./Filters.css";

const FiltersComponentWrapper = ({ handleSearch, dates, handleYearFilter, handlerClearFilters }) => {
  return (
    <div className="filters__wrapper">
      <SearchFilter handleSearch={handleSearch} />
      <YearFilter dates={dates} handleYearFilter={handleYearFilter} />
      <button onClick={handlerClearFilters}>X</button>
    </div>
  );
};

export default FiltersComponentWrapper;
