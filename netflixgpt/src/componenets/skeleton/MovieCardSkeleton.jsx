import React from 'react'

const MovieCardSkeleton = () => {
  return (
    <div>
      <div className="w-40 flex-shrink-0 animate-pulse">
        <div className="bg-gray-700 h-60 w-full rounded-lg"></div>
        <div className="bg-gray-700 h-4 w-3/4 mt-2 rounded"></div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton
