import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content above overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg mb-6">Watch anywhere. Cancel anytime.</p>
        <Link to="/login">
          <button className="bg-red-600 px-6 py-3 rounded-lg text-xl hover:bg-red-500">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
