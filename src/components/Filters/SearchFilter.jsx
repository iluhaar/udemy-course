import React, { useState } from "react";
import "./Filters.css";

const SearchFilter = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const onSearchChange = (e) => {
    e.preventDefault();
    handleSearch(value);
  };
  return (
    <form onSubmit={onSearchChange} className="search-filter">
      <input
        className="search-filter__item"
        type="search"
        name="SearchBar"
        id="SearchBar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilter;
