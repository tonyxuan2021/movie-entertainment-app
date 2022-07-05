import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import Trending from "../components/Trending";
import { useGlobalContext } from "../context";
import SignIn from "./SignIn";
import SignUp from "./Signup";

const HomePage = () => {
  const [failedAuth, setFailedAuth] = useState(false);

  const { movies } = useGlobalContext();

  const trendingArr = movies.filter((data) => {
    return data.isTrending;
  });

  const recommendedArr = movies.filter((data) => {
    return !data.isTrending;
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setFailedAuth(true);
    }
  });

  if (failedAuth) {
    return <SignUp />
  }

  return (
    <div>
      <Navbar />
      <Search />
      <Trending trendingArr={trendingArr} />
      <Recommended recommendedArr={recommendedArr} />
    </div>
  );
};

export default HomePage;
