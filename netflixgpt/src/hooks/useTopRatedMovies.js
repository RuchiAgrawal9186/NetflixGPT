import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies, getTopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    let data = await res.json();

    dispatch(getTopRatedMovies(data.results));
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;
