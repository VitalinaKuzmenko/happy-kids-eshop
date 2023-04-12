import React from "react";
import "./Header.css";
import Login from "./icons/login.svg";
import Basket from "./icons/cart.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>happy kids</h1>
      <header className="header__">
        <input className="search-input" type="text" placeholder="Search..." />
        <input className="menu-btn__" type="checkbox" id="menu-btn__" />
        <label className="menu-icon__" htmlFor="menu-btn__">
          <span className="navicon__"></span>
        </label>
        <ul className="menu__">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop Collection</NavLink>
          </li>
          <li>
            <NavLink to="/about">Our Story</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="mt-4">
          <div className="icons flex content-between block">
            <div className="login flex items-center cursor-pointer block">
              <p className="pr-2">Login</p>
              <img src={Login} alt="login-icon" />
            </div>
            <Link to="/checkout">
              <div className="basket flex items-center px-5 cursor-pointer">
                <img className="pb-1 " src={Basket} alt="basket-icon" />
                <p className="text-on-cart">0</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
