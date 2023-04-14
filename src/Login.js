import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login_page">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="logoTitle">happy kids</h2>
      </Link>

      <div className="login__container max-w-xs sm:max-w-lg">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
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

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Happy Kids Website Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* <button className="login__registerButton" onClick={register}> */}
        <button onClick={register} className="login__registerButton">
          Create your Happy Kids Account
        </button>
      </div>
    </div>
  );
};

export default Login;
