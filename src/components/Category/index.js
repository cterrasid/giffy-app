import React from "react";
import { Link } from "wouter";

export default function Category({ option, index }) {
  return (
    <li key={index} onClick={() => localStorage.setItem("lastKeyword", option)}>
      <Link to={`/search/${option}`}>
        {option}
      </Link>
    </li>
  );
}
