import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies, getTopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = (currentLang) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const getTopRatedMovie = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=${currentLang}&page=1`,
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getTopRatedMovies(data.results));
  };

  useEffect(() => {
    if (topRatedMovies?.length === 0) {
      getTopRatedMovie();
    }
  }, [currentLang]);
};

export default useTopRatedMovies;
