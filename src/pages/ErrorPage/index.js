import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "components/Button";
import useGifs from "hooks/useGifs";
import "./styles.css";

export default function Error() {
  const gifs = useGifs({ keyword: "confused" }).gifs;
  const [randomGif, setRandomGif] = useState({});

  useEffect(() => {
    const gif = gifs[Math.floor(Math.random() * gifs.length) + 1];
    if (gif !== undefined) {
      setRandomGif(gif);
    }
  }, [gifs]);

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <section>
        <h1>404</h1>
        <h2>A veces perderse no es tan malo...</h2>
        <img className="img" src={randomGif.url} alt={randomGif.title} />
        <Button href="/">Volver a casa</Button>
      </section>
    </>
  );
}
