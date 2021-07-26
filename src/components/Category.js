import React from "react";
import Meals from "./Meals";

const Category = ({ index, category }) => {
  return (
    <div key={index} className="category">
      <h3>{category.name}</h3>

      <Meals category={category} />
    </div>
  );
};

export default Category;
