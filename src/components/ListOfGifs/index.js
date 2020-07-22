import React, { useState, useEffect } from "react";
import Gif from "../Gif";
import getGifsService from '../../services/getGifsService';

export default function ListOfGifs({keyword}) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifsService({keyword}).then(gifs => setGifs(gifs));
  }, [keyword]);

    return (
        <>
        {gifs.map(({ id, title, url }) =>
          <Gif key={id} title={title} id={id} url={url} />
        )}
        </>
    )
}
