import React from "react";
import Meals from "./Meals";

const Category = ({ category, cart, setCart }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <Meals category={category} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Category;
