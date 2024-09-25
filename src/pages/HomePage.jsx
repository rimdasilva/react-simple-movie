import React from "react";
import MovieLayout from "../components/MovieLayout";

const HomePage = () => {
  return (
    <>
      <MovieLayout title="Now playing" type={"now_playing"} />
      <MovieLayout title="Top rated" type={"top_rated"} />
      <MovieLayout title="Trending" type={"popular"} />
    </>
  );
};

export default HomePage;
