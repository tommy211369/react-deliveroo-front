import React from "react";
import Meal from "./Meal";

const Meals = ({ category, cart, setCart }) => {
  return (
    <div className="meals">
      {category.meals.map((meal) => {
        return <Meal meal={meal} key={meal.id} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
};

export default Meals;
