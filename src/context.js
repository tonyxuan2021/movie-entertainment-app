import React, { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import data from "./data/data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {


  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    if(movies) {
      setMovies(data)
    }
  }, [])

  return (
    <AppContext.Provider value={{movies}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
