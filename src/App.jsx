import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
