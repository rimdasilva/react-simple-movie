import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config";

const MovieLayout = ({ title, type }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=7a8d51511cc5e3deceece37dc4824e3f`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="movies-layout page-container pb-20">
      <h2 className="capitalize text-white mb-10 text-2xl font-bold ">
        {title}
      </h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <MovieCard item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieLayout;
