import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'

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

        <div className='relative z-10'>
          <h1>gpt search page</h1>
          <GPTSearchBar></GPTSearchBar>
          <GPTMovieSuggestion></GPTMovieSuggestion>
        </div>
      </div>
    );
}

export default GPTSearchPage
