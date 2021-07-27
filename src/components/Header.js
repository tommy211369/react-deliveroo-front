import React from "react";
import logo from "../img/logo-deliveroo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ cart, setCart, displayCart, setDisplayCart }) => {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo deliveroo" />
        <div className="header-cart">
          {cart.idList.length > 0 && <span>{cart.idList.length}</span>}
          <FontAwesomeIcon icon="shopping-cart" className="cart-menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
