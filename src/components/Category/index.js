import React from "react";
import { CategoryItem, CategoryLink } from "./styles.js";

export default function Category({ option, index }) {
  return (
    <CategoryItem
      index={index}
      onClick={() => localStorage.setItem("lastKeyword", option)}
    >
      <CategoryLink to={`/search/${option}`}>{option}</CategoryLink>
    </CategoryItem>
  );
}
