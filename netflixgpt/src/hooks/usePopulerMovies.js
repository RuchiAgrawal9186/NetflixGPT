import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies, getPopulerMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopulerMovies = (currentLang) => {
  const dispatch = useDispatch();
  const getPopulerMovie = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${currentLang}&page=1`,
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getPopulerMovies(data.results));
  };

  useEffect(() => {
    getPopulerMovie();
  }, [currentLang]);
};

export default usePopulerMovies;
