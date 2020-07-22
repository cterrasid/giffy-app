import React, { useState, useEffect, Fragment } from "react";
import Gif from "../Gif";
import getGifsService from "../../services/getGifsService";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(
    () => {
      getGifsService({ keyword }).then(gifs => setGifs(gifs));
    },
    [keyword]
  );

  return (
    <Fragment>
      {gifs.map(({ id, title, url }) =>
        <Gif key={id} title={title} id={id} url={url} />
      )}
    </Fragment>
  );
}
