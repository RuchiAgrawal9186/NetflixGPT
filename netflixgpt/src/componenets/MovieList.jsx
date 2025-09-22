import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;
  
    return (
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
        <div className="flex overflow-x-scroll no-scrollbar space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
};

export default MovieList;
