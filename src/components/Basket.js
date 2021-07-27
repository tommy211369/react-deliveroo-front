import React, { useState, useEffect } from "react";

const Basket = ({ basket, setBasket }) => {
  let total = 0;

  // transforme le tableau en objet
  const meals = Object.keys(basket.meals);
  console.log("meals array : ", meals);

  for (let i = 0; i < meals.length; i++) {
    total += Number(
      basket.meals[meals[i]].price * basket.meals[meals[i]].quantity
    );
  }

  return (
    <div className="basket">
      {basket.idList.length > 0 ? (
        <div className="basket-on">
          <div className="valid valid-on">Valider votre panier</div>

          {basket.idList.map((id, index) => {
            return (
              <div key={index} className="cart-meals">
                <div className="counter">
                  <button
                    onClick={() => {
                      const newBaskets = { ...basket };
                      newBaskets.meals[id].quantity--;

                      if (newBaskets.meals[id].quantity === 0) {
                        newBaskets.idList.splice(newBaskets.idList[index], 1);
                        delete newBaskets.meals[id];
                      }

                      setBasket(newBaskets);
                    }}
                  >
                    -
                  </button>
                  <span>{basket.meals[id].quantity}</span>
                  <button
                    onClick={() => {
                      const newBaskets = { ...basket };
                      newBaskets.meals[id].quantity++;
                      setBasket(newBaskets);
                    }}
                  >
                    +
                  </button>
                </div>

                <div className="cart-meal-details">
                  <p>{basket.meals[id].name}</p>
                  <span>{basket.meals[id].price} €</span>
                </div>
              </div>
            );
          })}

          {/* SOUS TOTAL & FRAIS */}
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

export default Basket;
