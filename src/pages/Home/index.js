import React, { Fragment, useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <Fragment>
      <h3 className="App-title">Tendencias</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </Fragment>
  );
}
