import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/MoviesPage";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import Tvs from "./pages/TvPage";
import BookmarkPage from "./pages/BookmarkPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvs" element={<Tvs />} />
        <Route path="bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
