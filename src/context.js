import React, { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import data from "./data/data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState(data);
  const [query, setQuery] = useState("");

  const filteredArr = movies.filter((val) => {
    if (query === "") {
      return movies;
    } else if (val.title.toLowerCase().includes(query.toLowerCase())) {
      return val;
    } 
  });

  useEffect(() => {
    setMovies(filteredArr);
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
