import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Gif({ title, id, url }) {
  return (
    <article className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>
          {title}
        </h4>
        <img src={url} alt={title} />
      </Link>
    </article>
  );
}
