import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/MoviesPage";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import Tvs from "./pages/TvPage";
import BookmarkPage from "./pages/BookmarkPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvs" element={<Tvs />} />
        <Route path="bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
