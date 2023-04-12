import React from "react";
import "./Header.css";
import Login from "./icons/login.svg";
import Basket from "./icons/cart.svg";

const Header = () => {
  return (
    <>
      <h1>happy kids</h1>
      <header className="header__">
        <input className="search-input" type="text" placeholder="Search..." />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu__">
          <li>
            <a href="#work">Home</a>
          </li>
          <li>
            <a href="#about">Shop Collection</a>
          </li>
          <li>
            <a href="#careers">Our Story</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="icons flex content-between mx-8">
          <div className="login flex items-center mx-5 cursor-pointer">
            <p className="pr-2">Login</p>
            <img src={Login} alt="login-icon" />
          </div>
          <div className="basket flex items-center px-5 cursor-pointer">
            <img className="pb-1 " src={Basket} alt="basket-icon" />
            <p className="text-on-cart">0</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
