import React from "react";
import Category from "./Category";

const Categories = ({ data, cart, setCart }) => {
  return (
    <div className="categories">
      {data.categories.map((category, index) => {
        return (
          <Category
            key={index}
            category={category}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
};

export default Categories;
