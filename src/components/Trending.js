import React from "react";
import movieIcon from "../assets/icon-category-movie.svg";
import tvIcon from "../assets/icon-category-tv.svg";
import empty from "../assets/icon-bookmark-empty.svg";

const Trending = ({ newArr }) => {
  console.log(newArr);

  if (newArr.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="trending">
      <h3 className="trending__header">Trending</h3>
      <div className="trending__movie__wrapper">
        {newArr.map((movie, index) => {
          const { year, category, rating, title, thumbnail } = movie;
          console.log(thumbnail.regular.small);
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
              <img className="trending__bookmark" src={empty}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
