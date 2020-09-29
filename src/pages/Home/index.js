import React, { Fragment } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import { Title } from "styles";
import { StyledHomeContent } from "./styles";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <Fragment>
      <Helmet>
        <title>Home | Giffy</title>
        <meta name="description" content="Giffy's homepage" />
      </Helmet>
      <Title>
        <h1>Giffy</h1>
      </Title>
      <SearchForm />
      <StyledHomeContent className="content-container">
        <ListOfGifs gifs={gifs} />
        <TrendingSearches />
      </StyledHomeContent>
    </Fragment>
  );
}
