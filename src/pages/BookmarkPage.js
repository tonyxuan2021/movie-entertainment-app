import React from "react";
import tvIcon from "../assets/icon-category-tv.svg";
import movieIcon from "../assets/icon-category-movie.svg";
import empty from "../assets/icon-bookmark-empty.svg";
import full from "../assets/icon-bookmark-full.svg";

import { useGlobalContext } from "../context";

const BookmarkPage = () => {
  const { movies } = useGlobalContext();

  const bkMoviesArr = movies.filter((movie) => {
    return movie.category === "Movie" && movie.isBookmarked === true;
  });

  const bkTvsArr = movies.filter((tv) => {
    return tv.category === "TV Series" && tv.isBookmarked === true;
  });

  if (bkMoviesArr.length < 0 && bkTvsArr.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie">
      <p className="rec__header">Bookmarked Movies</p>
      <div className="rec__wrapper">
        {bkMoviesArr.map((movie, index) => {
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
      <p className="rec__header">Bookmarked TV Series</p>
      <div className="rec__wrapper">
        {bkTvsArr.map((movie, index) => {
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
  );
};

export default BookmarkPage;
