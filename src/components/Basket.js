import React, { useState, useEffect } from "react";

const Basket = ({ basket, setBasket }) => {
  let total = 0;

  for (let i = 0; i < basket.length; i++) {
    console.log("type of newPrice : ", typeof newPrice);
    total += Number(basket[i].price * basket[i].quantity);
    console.log("Type of newTotal : ", typeof newTotal);
  }

  return (
    <div className="basket">
      {basket.length > 0 ? (
        <div className="basket-on">
          <div className="valid valid-on">Valider votre panier</div>

          {basket.map((meal, index) => {
            return (
              <div className="cart-meals">
                <div className="counter">
                  <button
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket[index].quantity--;
                      setBasket(newBasket);
                    }}
                  >
                    -
                  </button>
                  <span>{meal.quantity}</span>
                  <button
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket[index].quantity++;
                      setBasket(newBasket);
                    }}
                  >
                    +
                  </button>
                </div>

                <div key={index} className="cart-meal-details">
                  <p>{meal.name}</p>
                  <span>{meal.price} €</span>
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
