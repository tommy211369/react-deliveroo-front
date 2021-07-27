import React from "react";
import Meals from "./Meals";

const Category = ({ category, setBasket, basket }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <Meals category={category} setBasket={setBasket} basket={basket} />
    </div>
  );
};

export default Category;
