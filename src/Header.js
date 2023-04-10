import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header class="header">
        <a href="" class="logo">
          CSS Nav
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
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
      </header>
    </>
  );
};

export default Header;
