import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies, getPopulerMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopulerMovies = (currentLang) => {
  const dispatch = useDispatch();
  const populerMovies = useSelector((store) => store.movie.populerMovies);
  const getPopulerMovie = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${currentLang}&page=1`,
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getPopulerMovies(data.results));
  };

  useEffect(() => {
    if (populerMovies?.length === 0) {
      getPopulerMovie();
    }
  }, [currentLang]);
};

export default usePopulerMovies;
