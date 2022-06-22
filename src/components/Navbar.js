import React from "react";
import "../index.scss";
import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import full from "../assets/icon-nav-bookmark.svg";
import tv from "../assets/icon-nav-tv-series.svg";
import avatar from "../assets/image-avatar.png";

const Navbar = () => {
  return (
    <div className="nav">
        <img src={logo} className="nav__width"></img>
      <div>
        <div className="nav__icon__wrapper">
          <img src={home} className="nav__icon"></img>
          <img src={movies} className="nav__icon"></img>
          <img src={tv} className="nav__icon"></img>
          <img src={full} className="nav__icon"></img>
        </div>
      </div>
      <img src={avatar} className="nav__width nav__avatar"></img>
    </div>
  );
};

export default Navbar;
