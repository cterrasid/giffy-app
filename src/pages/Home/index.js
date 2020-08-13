import React, { Fragment } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <Fragment>
      <Helmet>
        <title>Home | Giffy</title>
        <meta name="description" content="Giffy's homepage" />
      </Helmet>

      <h3 className="App-title">Tendencias</h3>
      <SearchForm />
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </Fragment>
  );
}
