import React, { Fragment, useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { isLoading, gifs, setPage } = useGifs({ keyword, rating });

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
  });

  const title = gifs
    ? `${gifs.length} resultados de ${keyword}`
    : isLoading
    ? "Cargando..."
    : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <Fragment>
      {isLoading ? (
        "Loading"
      ) : (
        <Fragment>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <h3>{decodeURI(keyword)}</h3>
          <SearchForm initialKeyword={keyword} initialRating={rating} />
          <ListOfGifs gifs={gifs} />
          <div id="snitch" ref={externalRef} />
        </Fragment>
      )}
    </Fragment>
  );
}
