import React from "react";
import logo from "../img/logo-deliveroo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ cart, displayCart, setDisplayCart }) => {
  const arrayCart = Object.keys(cart);
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo deliveroo" />
        <div className="header-cart">
          {arrayCart.length > 0 && <span>{arrayCart.length}</span>}
          <FontAwesomeIcon icon="shopping-cart" className="cart-menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
