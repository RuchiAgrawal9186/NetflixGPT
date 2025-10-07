import React, { Fragment, useContext } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { removeUser } from "../store/userSlice";
import { LANGUAGE_OBJ, LANGUAGES } from "../utils/constant";
import { setLanguage } from "../store/languageSlice";
import { AuthContext } from "../utils/authContext";
import { handleClear } from "../store/movieSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // const user = useSelector((store) => store.user);
  const currentLang = useSelector((store) => store.language.currentLang);
  const lang = LANGUAGE_OBJ[currentLang];
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    if (user) {
      signOut(auth)
        .then((res) => {
          toast.success("Sign out successfully");
          dispatch(removeUser());
          dispatch(handleClear());
          navigate("/");
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          toast.error(error.message);
        });
    } else {
      navigate("/login");
    }
  };

  const handleNavigate = () => {
    navigate("/gpt");
  };

  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-10 py-4 bg-gradient-to-b from-black/80 to-transparent z-50">
        <img
          src={logo}
          alt="logo"
          className="w-28 sm:w-32 md:w-40 h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 items-center justify-center mt-3 sm:mt-0">
          {/* Language Selector */}
          <select
            className="bg-black/70 text-white px-2 py-1 rounded border border-white text-sm sm:text-base"
            value={currentLang}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>

          {/* Conditional Button */}
          {location.pathname === "/gpt" ? (
            <button
              className="bg-red-600 text-white font-semibold rounded-md px-3 py-1 text-sm sm:text-base hover:bg-red-500 transition"
              onClick={() => navigate("/browse")}
            >
              {lang.backToBrowse}
            </button>
          ) : location.pathname === "/" || location.pathname === "/login" ? (
            <button
              className="bg-red-600 text-white font-semibold rounded-md px-3 py-1 text-sm sm:text-base hover:bg-red-500 transition"
              onClick={() => navigate("/browse")}
            >
              {"Browse"}
            </button>
          ) : (
            <button
              className="bg-red-600 text-white font-semibold rounded-md px-3 py-1 text-sm sm:text-base hover:bg-red-500 transition"
              onClick={handleNavigate}
            >
              {lang.gptSearch}
            </button>
          )}

          {/* Sign In/Out */}
          <button
            className="bg-red-600 text-white font-semibold rounded-md px-3 py-1 text-sm sm:text-base hover:bg-red-500 transition"
            onClick={handleClick}
          >
            {user ? lang.signOut : lang.signIn}
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
