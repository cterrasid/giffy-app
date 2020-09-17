import React from "react";
import Category from "../Category";
import "./styles.css";

export default function ListOfCategories({ name, options = [] }) {
  return (
    <>
      <h3 className="title">{name}</h3>
      <ul className="category-list">
        {options.map((option, index) => (
          <Category index={index} option={option} name={name} />
        ))}
      </ul>
    </>
  );
}
