import React from 'react'
import MovieCardSkeleton from './MovieCardSkeleton';

const MovieListSkeleton = () => {
  return (
    <div>
      <div className="px-6 py-4">
        <div className="h-6 w-40 bg-gray-700 mb-3 rounded animate-pulse"></div>

        <div className="flex overflow-x-auto space-x-4 pb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieListSkeleton
