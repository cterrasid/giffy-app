import React from "react";
import Category from "../Category";
import { Title } from "styles";
import "./styles.css";

export default function ListOfCategories({ name, options = [] }) {
  return (
    <>
      <Title>
        <h2>{name}</h2>
      </Title>
      <ul className="category-list">
        {options.map((option, index) => (
          <Category index={index} option={option} name={name} />
        ))}
      </ul>
    </>
  );
}
