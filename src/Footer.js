import React, { useState } from "react";
import "./Footer.css";
import FacebookIcon from "./icons/icons8-facebook-100.svg";
import PinterestIcon from "./icons/icons8-pinterest-100.svg";
import InstagramIcon from "./icons/icons8-instagram-100.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubscribed(true);

    setTimeout(() => setIsSubscribed(false), 4000);
    setEmail("");
  };
  return (
    <footer>
      <hr></hr>
      <h4 className="mt-8 text-center">happy kids</h4>
      <div className="flex flex-col justify-around my-8 md:flex-row">
        <div className="footer-menu flex flex-col my-3 mx-3">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop Collection</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-icons flex justify-center items-start my-3">
          <img src={FacebookIcon} alt="facebook-icon" />
          <img src={PinterestIcon} alt="facebook-icon" />
          <img src={InstagramIcon} alt="facebook-icon" />
        </div>
        <div className="extra-menu flex flex-col my-3 mx-3">
          <p>Shipping & Returns</p>
          <p>Store Policy</p>
          <p>Payment Methods</p>
          <p>FAQ</p>
        </div>
      </div>

      <form className="flex flex-col mt-5 mb-10" onSubmit={handleSubmit}>
        <label className="text-2xl text-black" htmlFor="email">
          Join Our Mailing List
        </label>
        <div className="mt-5">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email here*"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <button className="subscribe-button mt-5 sm:mt-1" type="submit">
            Subscribe Now
          </button>
        </div>
        <p className="mt-3 text-black ">
          {isSubscribed && "Thank you for subscribing!"}
        </p>
      </form>
      <p className="pb-5 px-5">
        This website design was created by Wix.com, and is used here for
        strictly educational purposes.
      </p>
    </footer>
  );
};

export default Footer;
