import React from "react";
import "./Footer.css";
import FacebookIcon from "./icons/icons8-facebook-100.svg";
import PinterestIcon from "./icons/icons8-pinterest-100.svg";
import InstagramIcon from "./icons/icons8-instagram-100.svg";

const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <h4 className="mt-8 text-center">happy kids</h4>
      <div className="flex flex-col justify-around my-8 md:flex-row">
        <div className="footer-menu flex flex-col my-3 mx-3">
          <a href="#">Home</a>
          <a href="#">Shop Collection</a>
          <a href="#">Our Story</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-icons flex justify-center items-start my-3">
          <img src={FacebookIcon} alt="facebook-icon" />
          <img src={PinterestIcon} alt="facebook-icon" />
          <img src={InstagramIcon} alt="facebook-icon" />
        </div>
        <div className="extra-menu flex flex-col my-3 mx-3">
          <a href="#">Shipping & Returns</a>
          <a href="#">Store Policy</a>
          <a href="#">Payment Methods</a>
          <a href="#">FAQ</a>
        </div>
      </div>

      <form className="flex flex-col mt-5 mb-10">
        <label className="text-2xl text-black" htmlFor="email">
          Join Our Mailing List
        </label>
        <div className="mt-5">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here*"
            required
          />
          <button className="subscribe-button" type="submit">
            Subscribe Now
          </button>
        </div>
        <p className="mt-3 text-black ">Thank you for subscribing!</p>
      </form>
      <p className="pb-5">
        This website design was created by Wix.com, and is used here for
        strictly educational purposes.
      </p>
    </footer>
  );
};

export default Footer;
