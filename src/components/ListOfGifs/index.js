import React from "react";
import Gif from "../Gif";
import "./styles.css";

export default function ListOfGifs({ gifs }) {
  return (
    <ul className="gif-list">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </ul>
  );
}
