import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../store/movieSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch();
    

  const getMovieVideo = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    let data = await res.json();

    const filterData = data?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer =
      filterData?.length > 0 ? filterData?.[0] : data?.results?.[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!movieId) return;
    getMovieVideo();
  }, [movieId]);
};

export default useVideoTrailer;
