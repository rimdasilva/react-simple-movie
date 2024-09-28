import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "./loading/LoadingSkeleton";
//https://image.tmdb.org/t/p/original${item.poster_path}
const MovieCard = ({ item }) => {
  const navigate = useNavigate();

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
        <Button
          bgColor="secondary"
          onClick={() => navigate(`/movie/${item.id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default withErrorBoundary(MovieCard, {
  FallbackComponent: () => {
    return (
      <p className="bg-red-50 text-red-400">
        Something went wrong with this component
      </p>
    );
  },
});

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-auto select-none">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>
            <LoadingSkeleton width="50%" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="50%" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="45px"
          radius="6px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
