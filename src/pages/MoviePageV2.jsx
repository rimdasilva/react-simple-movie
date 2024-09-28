import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard, { MovieCardSkeleton } from "../components/MovieCard";
import useDebounce from "../hooks/useDebounce";
import { v4 } from "uuid";
import Button from "../components/button/Button";
import useSWRInfinite from "swr/infinite";

const itemsPerPage = 20;
const MoviePageV2 = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=7a8d51511cc5e3deceece37dc4824e3f&page=${nextPage}`
  );

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );
  const loading = !data && !error;
  const movies = data?.results || [];

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=7a8d51511cc5e3deceece37dc4824e3f&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=7a8d51511cc5e3deceece37dc4824e3f&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  console.log(data);

  useEffect(() => {
    if (!data || !data.total_results) return;
    // setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 outline-none text-white"
            placeholder="Type here to search ..."
            onChange={handleFilter}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies &&
          movies.map((item) => <MovieCard key={item.id} item={item} />)}
      </div>
      <div className="mt-10 text-center">
        <Button>Load more</Button>
      </div>
    </div>
  );
};

export default MoviePageV2;
