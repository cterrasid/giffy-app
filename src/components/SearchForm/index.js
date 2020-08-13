import React, { useState, memo } from "react";
import { useLocation } from "wouter";

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={keyword} onChange={handleChange} />
      <button>Buscar</button>
    </form>
  );
}

export default memo(SearchForm);
