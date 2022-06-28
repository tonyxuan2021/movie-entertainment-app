import React from "react";
import tvIcon from "../assets/icon-category-tv.svg";
import movieIcon from "../assets/icon-category-movie.svg";
import empty from "../assets/icon-bookmark-empty.svg";
import full from "../assets/icon-bookmark-full.svg";
import { useGlobalContext } from "../context";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Tvs = () => {
  const { movies } = useGlobalContext();

  const tvsArr = movies.filter((tv) => {
    return tv.category === "TV Series";
  });

  if (tvsArr.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Search />
      <div className="movie">
        <p className="rec__header">TV Series</p>
        <div className="rec__wrapper">
          {tvsArr.map((movie, index) => {
            const { year, category, rating, title, thumbnail, isBookmarked } =
              movie;
            return (
              <div key={index} className="rec__movie__wrapper">
                <img className="rec__img" src={thumbnail.regular.small}></img>
                <div className="rec__info">
                  <p>{year}</p>
                  <img src={category === "Movie" ? movieIcon : tvIcon}></img>
                  <p>{category}</p>
                  <p>{rating}</p>
                </div>
                <p className="rec__title">{title}</p>
                <img
                  className="rec__bookmark"
                  src={isBookmarked ? full : empty}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tvs;
