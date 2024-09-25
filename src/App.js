import { Fragment } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieLayout from "./components/MovieLayout";
import "swiper/scss";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <MovieLayout title="Now playing" type={"now_playing"} />
      <MovieLayout title="Top rated" type={"top_rated"} />
      <MovieLayout title="Trending" type={"popular"} />
    </Fragment>
  );
}

export default App;
