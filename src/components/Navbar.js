import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import full from "../assets/icon-nav-bookmark.svg";
import tv from "../assets/icon-nav-tv-series.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} className="nav__width"></img>
      </Link>
      <div>
        <div className="nav__icon__wrapper">
          <Link to="/">
            <img src={home} className="nav__icon"></img>
          </Link>
          <Link to="/movies">
            <img src={movies} className="nav__icon"></img>
          </Link>
          <Link to="/tvs">
            <img src={tv} className="nav__icon"></img>
          </Link>
          <Link to="/bookmark">
            <img src={full} className="nav__icon"></img>
          </Link>
        </div>
      </div>
      <img src={avatar} className="nav__width nav__avatar"></img>
    </div>
  );
};

export default Navbar;
