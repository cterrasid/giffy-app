import React, { memo } from "react";
import { Link } from "wouter";
import "./styles.css";

function Gif({ title, id, url }) {
  return (
    <article className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </article>
  );
}

export default memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
