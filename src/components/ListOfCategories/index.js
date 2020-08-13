import React, { Fragment } from "react";
import Category from "../Category";
import "./styles.css";

export default function ListOfCategories({ name, options = [] }) {
  return (
    <Fragment>
      <h3 className="ListOfCategories-title">{name}</h3>
      <ul className="ListOfCategories">
        {options.map((option, index) => (
          <Category key={index} option={option} name={name} />
        ))}
      </ul>
    </Fragment>
  );
}
