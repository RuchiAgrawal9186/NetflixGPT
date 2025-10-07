import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { handleLoading, handleMovieResult } from "../store/gptSlice";
const getMovieData = async (dispatch, currentLang, movie) => {
  try {
    dispatch(handleLoading(true))
    const res = await fetch(
      // Ensure the URL is correctly formatted without external quotes
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=${currentLang}&page=1`,
      API_OPTIONS
    );

    // Check for a successful response (status 200-299)
    if (!res.ok) {
      throw new Error(`TMDB API request failed with status: ${res.status}`);
    }

    const data = await res.json();

    // Dispatch the results to the Redux store
    return data.results;
  } catch (error) {
    console.error("Movie search error:", error);
    // Optionally dispatch an action to handle the error state
  }
  finally
  {
dispatch(handleLoading(false))
  }
};

export default getMovieData;
