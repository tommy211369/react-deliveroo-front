import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal, cart, setCart }) => {
  const handleAddBasket = () => {
    const newCart = { ...cart };

    const cartArray = Object.keys(newCart); // array of cart keys (ids)

    // if meal is not already add to cart : add meal to cart
    if (cartArray.indexOf(meal.id) === -1) {
      newCart[meal.id] = {
        name: meal.title,
        price: meal.price,
        quantity: 1,
      };
      setCart(newCart);
    } else {
      // if meal is already add to cart : add a quantity to meal
      newCart[meal.id].quantity++;
      setCart(newCart);
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
