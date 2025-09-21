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
    <div>
      <VideoBackground
        title={original_title}
        overview={overview}
        movieId={id}
      />
      <VideoTitle movieId={id} title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
