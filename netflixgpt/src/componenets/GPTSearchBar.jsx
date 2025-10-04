import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LANGUAGE_OBJ } from "../utils/constant";

const GPTSearchBar = () => {
  const [query, setQuery] = useState("");
  const currentLang = useSelector((store) => store.language.currentLang);
  const lang = LANGUAGE_OBJ[currentLang];

  const handleSearch = () => {
    // if (!query.trim()) return;
    console.log("Searching for:", query);
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
