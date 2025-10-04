import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_OBJ } from "../utils/constant";
import openai from "../utils/openai";
import { searchMovies } from "../utils/gemeni";
import useSearchMovies from "../hooks/getMovieData";
import { handleMovieName, handleMovieResult } from "../store/gptSlice";
import getMovieData from "../hooks/getMovieData";

const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("");
  const currentLang = useSelector((store) => store.language.currentLang);
  const lang = LANGUAGE_OBJ[currentLang];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const res = await searchMovies(query);
    dispatch(handleMovieName(res));

    const promiseArray = res?.map((el) =>
      // 💡 Fix: Call the regular async function, not a Hook
      getMovieData(dispatch, currentLang, el)
    );

    // Wait for all TMDB API calls to complete if needed
    const searchMoviesResults =  await Promise.all(promiseArray);
    
    dispatch(handleMovieResult(searchMoviesResults));
  };
  return (
    <div className="flex w-1/2  mt-30">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={lang?.searchPlaceholder}
        className="w-full flex-grow px-6 py-4 text-lg rounded-l-md bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 px-8 py-4 text-lg rounded-r-md font-bold text-white hover:bg-red-500"
      >
        {lang?.searchBtn}
      </button>
    </div>
  );
};

export default GPTSearchBar;
