import React from 'react'

const MovieDetailSkeleton = () => {
  return (
    <div>
      <div className="bg-black min-h-screen text-white pt-[80px] flex flex-col items-center animate-pulse">
        <div className="w-full max-w-7xl px-1 mt-6">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl bg-gray-800" />
        </div>

        <div className="w-full max-w-7xl px-1 mt-8 space-y-4">
          <div className="h-8 bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <div className="h-10 w-24 bg-gray-700 rounded-lg"></div>
            <div className="h-10 w-28 bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailSkeleton
