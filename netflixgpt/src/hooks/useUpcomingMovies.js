import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies, getUpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = (currentLang) => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=${currentLang}&page=1`,
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, [currentLang]);
};

export default useUpcomingMovies;
