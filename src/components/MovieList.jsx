import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import { fetcher, tmdbAPI } from "../config";
import useSWR from "swr";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  const isLoading = !data && !error;

  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies &&
            movies.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <MovieCard item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
};

export default MovieList;
