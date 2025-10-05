import React from "react";
import GPTSearchBar from "../componenets/GPTSearchBar";
import GPTMovieSuggestion from "../componenets/GPTMovieSuggestion";

const GPTSearchPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* <div className="relative z-10 flex flex-col items-center w-full h-full pt-32 overflow-y-auto">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div> */}
      <div className="relative z-10 flex flex-col items-center w-full h-full pt-24 sm:pt-28 md:pt-32 overflow-y-auto  ">
        <GPTSearchBar />
        <div className="mt-8 sm:mt-10 md:mt-12 w-full max-w-screen bg-black/60">
          <GPTMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
