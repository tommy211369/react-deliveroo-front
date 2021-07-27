import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal, setBasket, basket }) => {
  const handleAddBasket = () => {
    const newBasket = { ...basket };

    // si le meal n'est pas déjà présent, on l'ajoute au panier
    if (newBasket.idList.indexOf(meal.id) === -1) {
      newBasket.idList.push(meal.id);
      newBasket.meals[meal.id] = {
        name: meal.title,
        price: meal.price,
        quantity: 1,
      };
      setBasket(newBasket);
    } else {
      newBasket.meals[meal.id].quantity++;
      setBasket(newBasket);
    }
  };

  return (
    <div className="meal" onClick={handleAddBasket}>
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
