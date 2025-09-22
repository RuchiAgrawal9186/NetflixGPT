import React from 'react'

const MovieCard = ({ movie }) => {
     if (!movie?.poster_path) return null;
  return (
    <div className="w-40 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform duration-200">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <p className="text-sm text-white mt-2 truncate">{movie.title}</p>
    </div>
  );
}

export default MovieCard
