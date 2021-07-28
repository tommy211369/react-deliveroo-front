import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, setCart }) => {
  let total = 0;

  // change object into array
  const cartArray = Object.keys(cart); // array of cart keys (ids)
  const newCart = { ...cart }; // copy of cart (meal objects)

  for (let i = 0; i < cartArray.length; i++) {
    console.log(cartArray[i]); // one id
    // newCart[cartArray[i]] : one meal
    total += Number(
      newCart[cartArray[i]].price * newCart[cartArray[i]].quantity
    );
  }

  return (
    <div className="basket">
      {cartArray.length > 0 ? (
        <div className="basket-on">
          <div className="valid valid-on">Valider votre panier</div>

          {cartArray.map((mealId, id) => {
            return (
              <div key={id} className="cart-meals">
                <div className="counter">
                  <span
                    onClick={() => {
                      const newCart = { ...cart };

                      newCart[mealId].quantity--;
                      if (newCart[mealId].quantity === 0) {
                        cartArray.splice(id, 1);
                        delete newCart[mealId];
                      }

                      setCart(newCart);
                    }}
                  >
                    <FontAwesomeIcon
                      icon="minus-circle"
                      className="counter-icon"
                    />
                  </span>

                  <span className="quantity">{newCart[mealId].quantity}</span>

                  <span
                    onClick={() => {
                      const newCart = { ...cart };
                      newCart[mealId].quantity++;
                      setCart(newCart);
                    }}
                  >
                    <FontAwesomeIcon
                      icon="plus-circle"
                      className="counter-icon"
                    />
                  </span>
                </div>

                <div className="cart-meal-details">
                  <p>{newCart[mealId].name}</p>
                  <span>{newCart[mealId].price} €</span>
                </div>
              </div>
            );
          })}

          {/* SUBTOTAL & SHIPPING COST*/}
          <div className="taxes-sous-total">
            <div>
              <p>Sous-total</p>
              <span>{total.toFixed(2)} €</span>
            </div>
            <div>
              <p>Frais de livraison</p>
              <span>{parseFloat(2.5).toFixed(2)} €</span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="total">
            <p>Total</p>
            <span>{(total + parseFloat(2.5)).toFixed(2)} €</span>
          </div>
        </div>
      ) : (
        <div className="basket-off">
          <div className="valid valid-off">Valider votre panier</div>
          <p className="empty-basket">Votre panier est vide</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
