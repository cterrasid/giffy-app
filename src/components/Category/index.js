import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Category({ option, index }) {
  return (
    <li
      className="category-item"
      key={index}
      onClick={() => localStorage.setItem("lastKeyword", option)}
    >
      <Link to={`/search/${option}`} className="category-link link">
        {option}
      </Link>
    </li>
  );
}
