import React, { useState, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifsService from "../../services/getGifsService";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);
      getGifsService({ keyword }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
      });
    },
    [keyword]
  );

  return <ListOfGifs gifs={gifs} />;
}
