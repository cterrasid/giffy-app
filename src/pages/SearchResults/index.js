import React, { Fragment, useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { isLoading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false
  });

  // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  // const handleNextPage = () => console.log("next page");

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    []
  );

  useEffect(
    () => {
      console.log(isNearScreen);

      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <Fragment>
      {isLoading
        ? "Loading"
        : <Fragment>
            <h3>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            <div id="snitch" ref={externalRef} />
            {/*Peta al principio porque estamos añadiendo una ref a algo que no existe. Por eso, hay que adaptar useNearScreen para que acepte referencias externas */}
          </Fragment>}
    </Fragment>
  );
}
