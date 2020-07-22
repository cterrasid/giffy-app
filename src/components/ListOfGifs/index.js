import React, { useState, useEffect, Fragment } from "react";
import Gif from "../Gif";
import getGifsService from "../../services/getGifsService";
import "./styles.css";

export default function ListOfGifs({ params }) {
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

  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) =>
        <Gif key={id} title={title} id={id} url={url} />
      )}
    </div>
  );
}
