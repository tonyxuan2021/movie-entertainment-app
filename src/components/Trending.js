import React from "react";
import movieIcon from "../assets/icon-category-movie.svg";
import tvIcon from "../assets/icon-category-tv.svg";
import empty from "../assets/icon-bookmark-empty.svg";
import full from "../assets/icon-bookmark-full.svg"


const Trending = ({ trendingArr }) => {

  if (trendingArr.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="trending">
      <p className="trending__header">Trending</p>
      <div className="trending__movie__wrapper">
        {trendingArr.map((movie, index) => {
          const { year, category, rating, title, thumbnail, isBookmarked } = movie;
          return (
            <div key={index} className="trending__movie">
              <img
                className="trending__movie__photo"
                src={`${thumbnail.regular.small}`}
              ></img>
              {/* <img src={test}></img> */}
              <p className="trending__title">{title}</p>
              <div className="trending__info">
                <p>{year}</p>
                <img src={category === "Movie" ? movieIcon : tvIcon}></img>
                <p>{category}</p>
                <p>{rating}</p>
              </div>
              <img className="trending__bookmark" src={isBookmarked ? full : empty}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
