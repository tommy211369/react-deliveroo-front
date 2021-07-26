import React from "react";
import logo from "../img/logo-deliveroo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo deliveroo" />
      </div>
    </div>
  );
};

export default Header;
