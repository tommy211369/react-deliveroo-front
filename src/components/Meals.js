import React from "react";
import Meal from "./Meal";

const Meals = ({ category }) => {
  return (
    <div className="meals">
      {category.meals.map((meal) => {
        return <Meal meal={meal} />;
      })}
    </div>
  );
};

export default Meals;
