import React from "react";

import Category from "./Category";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      {data.categories
        .splice(data.categories.length - 6)
        .map((category, index) => {
          return <Category category={category} index={index} />;
        })}
    </div>
  );
};

export default Categories;
