import React, { useEffect } from "react";

import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "../componenets/MainContainer";
import SecondoryContainer from "../componenets/SecondoryContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
