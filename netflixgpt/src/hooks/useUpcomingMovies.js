import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies, getUpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = (currentLang) => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  const getUpcomingMovie = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=${currentLang}&page=1`,
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getUpcomingMovies(data.results));
  };

  useEffect(() => {
    if (upcomingMovies?.length === 0) {
      getUpcomingMovie();
    }
  }, [currentLang]);
};

export default useUpcomingMovies;
