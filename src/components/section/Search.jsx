import React from "react";

const Search = () => {
  return (
    <div id="search">
      <div className="search__inner">
        <label htmlFor="searchInput">
          <span className="ir">검색</span>
        </label>
        <input
          type="search"
          name="searchInput"
          id="searchInput"
          placeholder="검색"
          autoComplete="off"
          className="search__input"
        />
      </div>
    </div>
  );
};

export default Search;
