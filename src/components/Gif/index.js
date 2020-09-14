import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Gif({ title, id, url }) {
  return (
    <li className="gif-item">
      <Link to={`/gif/${id}`} className="gif-link link">
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </li>
  );
}
