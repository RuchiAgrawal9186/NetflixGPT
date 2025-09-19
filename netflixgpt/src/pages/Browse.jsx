import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../store/movieSlice";

const Browse = () => {
  const dispatch = useDispatch()
  const getNowPlayingMovie = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    let data = await res.json();
    
    dispatch(getNowPlayingMovies(data.results ));
    console.log(data.results, "result");
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
  return <div>browse</div>;
};

export default Browse;
