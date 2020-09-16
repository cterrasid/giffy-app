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
      <h1 className="title">Giffy</h1>
      <SearchForm />
      <div className="content-container">
        <TrendingSearches />
        <ListOfGifs gifs={gifs} />
      </div>
    </Fragment>
  );
}
