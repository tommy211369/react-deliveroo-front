import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal, setBasket, basket }) => {
  const handleAddBasket = (index) => {
    let newBasket = [...basket];

    if (newBasket.indexOf(index) === -1) {
      newBasket.push({
        id: meal.id,
        name: meal.title,
        price: meal.price,
        counter: 1,
      });
      setBasket(newBasket);
    } else {
      newBasket[index][meal.counter]++;
      setBasket(newBasket);
    }
  };

  return (
    <div className="meal" onClick={() => handleAddBasket(meal.id)}>
      <div className="details">
        <h4>{meal.title}</h4>
        {meal.description ? (
          <p className="meal-description">{meal.description}</p>
        ) : (
          <p></p>
        )}
        <div className="price">
          <p>{meal.price.replace(".", ",")} €</p>
          {meal.popular ? (
            <div className="popular">
              <FontAwesomeIcon icon="star" />
              <span>Populaire</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {meal.picture ? <img src={meal.picture} alt={meal.title} /> : <p></p>}
    </div>
  );
};

export default Meal;
