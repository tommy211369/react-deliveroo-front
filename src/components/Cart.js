import React from "react";

const Cart = ({ cart, setCart }) => {
  let total = 0;

  // change object into array
  const meals = Object.keys(cart.meals);
  console.log("meals array : ", meals);

  for (let i = 0; i < meals.length; i++) {
    total += Number(cart.meals[meals[i]].price * cart.meals[meals[i]].quantity);
  }

  return (
    <div className="basket">
      {cart.idList.length > 0 ? (
        <div className="basket-on">
          <div className="valid valid-on">Valider votre panier</div>

          {cart.idList.map((id, index) => {
            return (
              <div key={index} className="cart-meals">
                <div className="counter">
                  <button
                    onClick={() => {
                      const newCart = { ...cart };
                      newCart.meals[id].quantity--;

                      if (newCart.meals[id].quantity === 0) {
                        newCart.idList.splice(newCart.idList[index], 1);
                        delete newCart.meals[id];
                      }

                      setCart(newCart);
                    }}
                  >
                    -
                  </button>
                  <span>{cart.meals[id].quantity}</span>
                  <button
                    onClick={() => {
                      const newCart = { ...cart };
                      newCart.meals[id].quantity++;
                      setCart(newCart);
                    }}
                  >
                    +
                  </button>
                </div>

                <div className="cart-meal-details">
                  <p>{cart.meals[id].name}</p>
                  <span>{cart.meals[id].price} €</span>
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
