import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { API_URL_REGISTER } from "../config/index";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL_REGISTER}`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then(() => {
        setSuccess(true);
        setError("");
        e.target.reset();
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data);
      });
  };

  return (
    <div className="signin">
      <div className="signin__img__wrapper">
        <img src={logo} className="signin__img"></img>
      </div>
      <form className="signin__form" onSubmit={handleSubmit}>
        <p className="signin__title">Sign Up</p>
        <input
          placeholder="Email address"
          name="email"
          className="signin__input"
        ></input>
        <input
          placeholder="Password"
          className="signin__input"
          name="password"
        ></input>
        <button className="signin__link__login">Create an account</button>
        <div className="signin__link__wrapper">
          <p>Already have an account?</p>
          <Link to="/signin" className="signin__link__signup">
            Login
          </Link>
        </div>
      </form>

      {success && <div className="signup__msg">Signed up!</div>}
      {error && <div className="signup__error">{error}</div>}
    </div>
  );
};

export default SignUp;
