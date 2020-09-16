import React from "react";
import Gif from "../Gif";
import "./styles.css";

export default function ListOfGifs({ gifs }) {
  return (
    <section>
      <h3 className="title">Última búsqueda</h3>
      <ul className="gif-list">
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} title={title} id={id} url={url} />
        ))}
      </ul>
    </section>
  );
}
