import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { changeSearchValue } from "pages/home/redux/actions/index";

const Search = () => {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.movies);

  return (
    <div className="form-group ">
      <input
        type="text"
        className="search form-control "
        placeholder="Saerch Your Movie Here..."
        value={search}
        onChange={(e) => dispatch(changeSearchValue(e.target.value))}
      />
    </div>
  );
};

export default Search;
