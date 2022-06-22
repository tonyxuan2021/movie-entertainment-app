import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Trending from "../components/Trending";
import { useGlobalContext } from "../context";

const HomePage = () => {
  const { movies } = useGlobalContext();
  // console.log(movies)

  const newArr = movies.filter((data)=> {
      return data.isTrending
  })

  // console.log(newArr)

  return (
    <div>
      <Navbar />
      <Search />
      <Trending newArr={newArr}/>
    </div>
  );
};

export default HomePage;
