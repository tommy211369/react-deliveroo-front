import React from "react";
import Meals from "./Meals";

const Category = ({ category }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <Meals category={category} />
    </div>
  );
};

export default Category;
