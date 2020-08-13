import React, { memo } from "react";
import { useLocation } from "wouter";
import { useReducer } from "react";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return state;
  }
};

function SearchForm({ initialKeyword = "", initialRating = "" }) {
  // const [rating, setRating] = useState(initialRating);

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, rating, times } = state;

  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value });
  };

  const handleChangeRating = (e) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value });
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
