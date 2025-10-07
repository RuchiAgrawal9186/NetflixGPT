import React, { useEffect } from "react";

import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "../componenets/MainContainer";
import SecondoryContainer from "../componenets/SecondoryContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import { LANGUAGE_OBJ } from "../utils/constant";

const Browse = () => {
  const currentLang = useSelector((store) => store.language.currentLang);
  const lang = LANGUAGE_OBJ[currentLang];
  useNowPlayingMovie(currentLang);
  usePopulerMovies(currentLang);
  useTopRatedMovies(currentLang);
  useUpcomingMovies(currentLang);
  return (
    <div className="bg-black min-h-screen w-full relative z-10">
      {/* Hero Section */}
      <MainContainer />

      <div className="relative z-30 -mt-10 sm:-mt-16 md:-mt-20">
        <SecondoryContainer />
      </div>
    </div>
  );
};

export default Browse;
