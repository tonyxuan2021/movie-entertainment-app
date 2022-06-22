import React from "react";
import test from "../assets/thumbnails/beyond-earth/regular/small.jpg"

const Trending = ({ newArr }) => {
  console.log(newArr);

  if (newArr.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <h3>Trending</h3>
      {newArr.map((movie) => {
        const { year, category, rating, title, thumbnail } = movie;
        console.log(thumbnail.regular.small)
        return (
            <div>
            <img src={thumbnail.regular.small}></img>
            {/* <img src={test}></img> */}
            <p>{title}</p>
            </div>
        )
      })}
    </div>
  );
};

export default Trending;
