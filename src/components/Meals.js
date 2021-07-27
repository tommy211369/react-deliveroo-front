import React from "react";
import Meal from "./Meal";

const Meals = ({ category, setBasket, basket }) => {
  return (
    <div className="meals">
      {category.meals.map((meal) => {
        return (
          <Meal
            meal={meal}
            key={meal.id}
            setBasket={setBasket}
            basket={basket}
          />
        );
      })}
    </div>
  );
};

export default Meals;
