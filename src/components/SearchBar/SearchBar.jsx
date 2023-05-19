import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const onSearchChange = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  const onSearchClear = () => {
    handleSearch("");
    setValue("");
  };

  return (
    <form onSubmit={onSearchChange}>
      <input type="search" name="SearchBar" id="SearchBar" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Search</button>
      <button onClick={onSearchClear}>Clear</button>
    </form>
  );
};

export default SearchBar;
