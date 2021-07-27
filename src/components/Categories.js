import React from "react";
import Category from "./Category";

const Categories = ({ data, setBasket, basket }) => {
  return (
    <div className="categories">
      {data.categories.map((category, index) => {
        return (
          <Category
            key={index}
            category={category}
            setBasket={setBasket}
            basket={basket}
          />
        );
      })}
    </div>
  );
};

export default Categories;
