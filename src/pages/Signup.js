import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const SignUp = () => {
  return (
    <div className="signin">
      <div className="signin__img__wrapper">
        <img src={logo} className="signin__img"></img>
      </div>
      <form className="signin__form">
        <p className="signin__title">Sign Up</p>
        <input
          placeholder="Email address"
          name="email"
          className="signin__input"
        ></input>
        <input placeholder="Password" className="signin__input"></input>
        <Link to="" className="signin__link__login">
          Login to your account
        </Link>
        <div className="signin__link__wrapper">
          <p>Already have an account?</p>
          <Link to="" className="signin__link__signup">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
