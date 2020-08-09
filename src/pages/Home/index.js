import React, { Fragment, useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { useCallback } from "react";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <Fragment>
      <h3 className="App-title">Tendencias</h3>
      <SearchForm onSubmit={handleSubmit} />
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </Fragment>
  );
}
