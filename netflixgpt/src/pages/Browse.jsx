import React, { useEffect } from "react";

import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "../componenets/MainContainer";
import SecondoryContainer from "../componenets/SecondoryContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopulerMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <MainContainer />

      {/* Push rows below hero */}
      <div className="relative z-30 -mt-20">
        <SecondoryContainer />
      </div>
    </div>
  );
};

export default Browse;
