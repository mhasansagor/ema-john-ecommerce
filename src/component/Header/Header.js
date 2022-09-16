import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orders">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
      </nav>
    </div>
  );
};

export default Header;
