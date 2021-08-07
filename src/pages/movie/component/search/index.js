import React from "react";

const Search = ({ search, searchMovie }) => {
  return (
    <div className="form-group ">
      <input
        type="text"
        className="search form-control "
        placeholder="Saerch Your Movie Here..."
        value={search}
        onChange={(e) => searchMovie(e.target.value)}
      />
    </div>
  );
};

export default Search;
