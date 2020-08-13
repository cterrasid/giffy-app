import React from "react";
import Gif from "../Gif";
import "./styles.css";

export default function ListOfGifs({ gifs }) {
  return (
    <ul className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <li className="ListOfGifs-item" key={id}>
          <Gif key={id} title={title} id={id} url={url} />
        </li>
      ))}
    </ul>
  );
}
