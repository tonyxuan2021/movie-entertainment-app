import React from "react";
import tvIcon from "../assets/icon-category-tv.svg";
import movieIcon from "../assets/icon-category-movie.svg";
import empty from "../assets/icon-bookmark-empty.svg";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, setMovies } = useGlobalContext();

  // console.log(movies)

  const moviesArr = movies.filter((movie) => {
    return movie.category === "Movie";
  });

  if (moviesArr.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie">
      <p className="rec__header">Movies</p>
      <div className="rec__wrapper">
        {moviesArr.map((movie, index) => {
          const { year, category, rating, title, thumbnail } = movie;
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
              <img className="rec__bookmark" src={empty}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
