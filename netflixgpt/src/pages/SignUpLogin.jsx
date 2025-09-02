import React, { Fragment } from "react";

const SignUpLogin = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen text-white">
        {/* Form Box */}
        <div className="bg-black/60 p-10 rounded-md w-96 ">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email or phone number"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />

            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-3 rounded hover:bg-red-500"
            >
              Sign In
            </button>

            {/* Extra options */}
            <div className="flex justify-between text-gray-400 text-sm mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Remember me
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>

          {/* Sign up link */}
          <div className="text-gray-400 text-sm mt-6">
            New to NetflixGPT?{" "}
            <a href="#" className="text-white hover:underline">
              Sign up now
            </a>
          </div>

          {/* Info */}
          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpLogin;
