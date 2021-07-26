import React from "react";
import Category from "./Category";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      {data.categories.map((category, index) => {
        return <Category key={index} category={category} />;
      })}
    </div>
  );
};

export default Categories;
