import React from "react";

import { useDispatch, useSelector } from "react-redux";

import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  useVideoTrailer(movieId);

  return (
    <div className="relative w-screen h-[100vh] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title={trailerVideo.name}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* Overlay dark gradient for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>
    </div>
  );
};

export default VideoBackground;
