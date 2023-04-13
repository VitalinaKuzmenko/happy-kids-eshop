import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="logoTitle">happy kids</h2>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <label htmlFor="email">E-mail*</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="login__signInButton"
            // onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Happy Kids Website Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* <button className="login__registerButton" onClick={register}> */}
        <button className="login__registerButton">
          Create your Happy Kids Account
        </button>
      </div>
    </div>
  );
};

export default Login;
