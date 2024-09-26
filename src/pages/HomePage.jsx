import React from "react";
import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <>
      <div className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold ">
          Now playing
        </h2>
        <MovieList type={"now_playing"} />
      </div>
      <div className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold ">
          Top rated
        </h2>
        <MovieList type={"top_rated"} />
      </div>
      <div className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold ">
          Trending
        </h2>
        <MovieList type={"popular"} />
      </div>
    </>
  );
};

export default HomePage;
