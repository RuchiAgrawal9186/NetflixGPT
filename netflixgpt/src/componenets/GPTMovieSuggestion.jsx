import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { moviesNames, moviesResults } = useSelector((store) => store.gpt);

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
