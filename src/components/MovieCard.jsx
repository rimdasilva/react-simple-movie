import React from "react";
import { NavLink } from "react-router-dom";

//https://image.tmdb.org/t/p/original${item.poster_path}
const MovieCard = ({ item }) => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-auto select-none">
      <img
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt="Movie Card"
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-[18px] font-semibold">{item.title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(item.release_date).getFullYear()}</span>
          <span>{item.vote_average}</span>
        </div>
        <NavLink
          to={`/movie/${item.id}`}
          className="py-3 px-6 rounded-lg bg-primary capitalize w-full mt-auto"
        >
          Watch Now
        </NavLink>
      </div>
    </div>
  );
};

export default MovieCard;
