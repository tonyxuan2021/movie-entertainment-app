import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import Trending from "../components/Trending";
import { useGlobalContext } from "../context";

const HomePage = () => {
  const { movies } = useGlobalContext();

  const trendingArr = movies.filter((data)=> {
      return data.isTrending
  })

  const recommendedArr = movies.filter((data)=> {
    return !data.isTrending
  })


  return (
    <div>
      <Trending trendingArr={trendingArr}/>
      <Recommended recommendedArr={recommendedArr}/>
    </div>
  );
};

export default HomePage;
