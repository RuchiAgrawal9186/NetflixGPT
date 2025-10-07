import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieListSkeleton from "./skeleton/MovieListSkeleton";

const GPTMovieSuggestion = () => {
  const { moviesNames, moviesResults, loading } = useSelector(
    (store) => store.gpt
  );

  if (loading) {
    return (
      <div className="relative z-30 w-full h-auto opacity-90">
        {/* Show 5 skeleton rows */}
        {Array.from({ length: 5 }).map((_, i) => (
          <MovieListSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className=" relative z-30 w-full  h-auto opacity-90 ">
      {moviesNames?.map((list, index) => {
        return (
          <MovieList key={list} title={list} movies={moviesResults[index]} />
        );
      })}
    </div>
  );
};

export default GPTMovieSuggestion;
