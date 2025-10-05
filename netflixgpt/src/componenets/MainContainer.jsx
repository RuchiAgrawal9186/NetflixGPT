import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);

  if (!movies) {
    return;
  }
  const mainMovie = movies?.[0] || {};
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen pt-20 sm:pt-0 md:pt-0 lg:pt-0">
      <VideoBackground movieId={id} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
