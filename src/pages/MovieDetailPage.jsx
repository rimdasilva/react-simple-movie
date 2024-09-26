import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`${tmdbAPI.imageOriginal(poster_path)}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres && (
        <div className="flex items-center justify-center gap-x-5 mb-10 text-white">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary text-primary border rounded"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits movieId={movieId} />
      <MovieVideos movieId={movieId} />
      <MovieSimilar />
    </div>
  );
};

function MovieCredits({ movieId }) {
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

  if (!data) return null;
  const { cast } = data;

  if (!cast || cast.length <= 0) return null;

  //{cast && cast.map((item) => <span>{item.name}</span>)}
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast &&
          cast.slice(0, 4).map((item) => (
            <div key={item.id} className="cast-item">
              <img
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                className="w-full h-[350px] object-cover rounded-lg mb-3"
                alt=""
              />
              <h3 className="text-xl font-medium">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieVideos({ movieId }) {
  const { data } = useSWR(tmdbAPI.getMovieVideos(movieId), fetcher);

  if (!data) return null;
  const { results } = data;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results &&
          results.slice(0, 3).map((item) => (
            <div key={item.id}>
              {/* <h3>{item.name}</h3> */}
              <div className="w-full aspect-video">
                <iframe
                  width="1280"
                  height="533"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full object-fill"
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();

  const { data } = useSWR(tmdbAPI.getMovieSimilar(movieId), fetcher);

  if (!data) return null;
  const movies = data.results;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar Movies</h2>
      <div className="movie-list">
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
      </div>
    </div>
  );
}

export default MovieDetailPage;
