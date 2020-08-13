import React, { useState, memo } from "react";
import { useLocation } from "wouter";
import { useReducer } from "react";

const RATINGS = ["g", "pg", "pg-13", "r"];

const reducer = (state, param) => {
  console.log(param);
  return {
    ...state,
    keyword: param,
    times: state.times + 1,
  };
};

function SearchForm({ initialKeyword = "", initialRating = "" }) {
  // const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = useState(initialRating);
  // const [times, setTimes] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    times: 0,
  });

  const { keyword, times } = state;

  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const updateKeyword = (keyword) => {
    dispatch(keyword);
  };

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search a gif here..."
      />
      <button>Buscar</button>
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}

export default memo(SearchForm);
