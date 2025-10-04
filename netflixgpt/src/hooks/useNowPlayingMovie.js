import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovie = (currentLang) => {
 
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${currentLang}&page=1`,
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, [currentLang]);
};

export default useNowPlayingMovie;
