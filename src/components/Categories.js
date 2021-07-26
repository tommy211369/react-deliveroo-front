import React from "react";
import Category from "./Category";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      {data.categories
        .splice(data.categories[0], data.categories.length - 6)
        .map((category, index) => {
          return <Category key={index} category={category} />;
        })}
    </div>
  );
};

export default Categories;
