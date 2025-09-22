import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-15 left-0 w-full h-[100vh] flex flex-col justify-center px-10 z-20">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-white max-w-lg line-clamp-3">{overview}</p>
      <div className="mt-4">
        <button className="bg-white text-black px-6 py-2 rounded mr-4">
          Play
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
