import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Category({ option, index }) {
  return (
    <li
      className="Category"
      key={index}
      onClick={() => localStorage.setItem("lastKeyword", option)}
    >
      <Link to={`/search/${option}`} className="Category-link">
        {option}
      </Link>
    </li>
  );
}
