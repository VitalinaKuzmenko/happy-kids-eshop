import React from "react";

const Footer = () => {
  return (
    <div>
      <h4>happy kids</h4>
      <div>
        <div className="footer-menu"></div>
        <div className="icons"></div>
        <div className="extra-menu"></div>
      </div>

      <form>
        <label htmlFor="email">Join Our Mailing List</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Subscribe Now</button>
      </form>
      <p>
        This website design was created by Wix.com, and is used here for
        strictly educational purposes.
      </p>
    </div>
  );
};

export default Footer;
