import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/scss";
import Main from "./components/layout/Main";
import Banner from "./components/Banner";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </Fragment>
  );
}

export default App;
