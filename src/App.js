import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/MoviesPage";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
