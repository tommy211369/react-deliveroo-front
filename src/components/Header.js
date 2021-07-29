import React from "react";
import logo from "../img/logo-deliveroo.png";
import MenuCart from "./MenuCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ cart, setCart, displayCart, setDisplayCart }) => {
  const cartArray = Object.keys(cart);

  const newCart = { ...cart };

  let totalQuantity = 0;

  for (let i = 0; i < cartArray.length; i++) {
    totalQuantity += Number(newCart[cartArray[i]].quantity);
  }

  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo deliveroo" />
        <div className="header-cart">
          {totalQuantity > 0 && <span>{totalQuantity}</span>}
          <FontAwesomeIcon
            icon="shopping-cart"
            className="cart-menu"
            onClick={() => {
              setDisplayCart(!displayCart);
            }}
          />
        </div>

        {displayCart && (
          <MenuCart
            cart={cart}
            setCart={setCart}
            displayCart={displayCart}
            setDisplayCart={setDisplayCart}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
