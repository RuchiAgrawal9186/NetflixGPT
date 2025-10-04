import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0 || !Array.isArray(movies)) return null;

  return (
    <div className="px-6 py-4">
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>

      <div className="flex overflow-x-auto space-x-4 scroll-smooth flex-nowrap pb-3 hide-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
