import React, { Fragment } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { isLoading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return (
    <Fragment>
      {isLoading
        ? "Loading"
        : <Fragment>
            <h3>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
          </Fragment>}
      <br />
      <button onClick={handleNextPage}>Next Page</button>
    </Fragment>
  );
}
