import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-lg mb-6">Watch anywhere. Cancel anytime.</p>
      <Link to={"/login"}>
        <button className="bg-red-600 px-6 py-3 rounded-lg text-xl hover:bg-red-500">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
