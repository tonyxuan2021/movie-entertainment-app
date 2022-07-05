import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_URL_LOGIN } from "../config/index";
import logo from "../assets/logo.svg";

const SignIn = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios
      .post(`${API_URL_LOGIN}`, {
        email,
        password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        setSuccess(true);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div className="signin">
      <div className="signin__img__wrapper">
        <img src={logo} className="signin__img"></img>
      </div>
      <form className="signin__form" onSubmit={handleSubmit}>
        <p className="signin__title">Login</p>
        <input
          placeholder="Email address"
          name="email"
          className="signin__input"
          value="test@gmail.com"
        />
        <input
          placeholder="Password"
          className="signin__input"
          name="password"
          type="password"
          value="123"
        />
        <button className="signin__link__login">Login to your account</button>
        <div className="signin__link__wrapper">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signin__link__signup">
            Sign up?
          </Link>
        </div>
      </form>
      {success && <Navigate replace to="/" />}
      {error && <p className="signin__err">{error}</p>}
    </div>
  );
};

export default SignIn;
