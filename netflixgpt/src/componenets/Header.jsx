import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { removeUser } from "../store/userSlice";
import { LANGUAGE_OBJ, LANGUAGES } from "../utils/constant";
import { setLanguage } from "../store/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const currentLang = useSelector((store) => store.language.currentLang);
  const lang = LANGUAGE_OBJ[currentLang];

  const handleClick = () => {
    if (user?.type === "signin") {
      signOut(auth)
        .then((res) => {
          toast.success("Sign out successfully");
          dispatch(removeUser());
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
      <div className="absolute top-0 left-0 w-full h-15 flex justify-between items-center px-10 bg-gradient-to-b from-black/80 to-transparent z-10">
        <img src={logo} alt="logo" className="w-40 h-10" onClick={()=> navigate("/")}/>

        <div className="flex gap-2 items-center">
          {/* Language Selector */}
          <select
            className="bg-black/70 text-white px-2 py-1 rounded border border-white"
            value={currentLang}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
          >
            {LANGUAGES?.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>

          {/* Conditional Button */}
          {location.pathname === "/gpt" ? (
            <button
              className="bg-red-600 text-white font-bold rounded-md px-3 py-1 cursor-pointer hover:bg-red-500"
              onClick={() => navigate("/browse")}
            >
              {lang.backToBrowse}
            </button>
          ) : (
            <button
              className="bg-red-600 text-white font-bold rounded-md px-3 py-1 cursor-pointer hover:bg-red-500"
              onClick={handleNavigate}
            >
              {lang.gptSearch}
            </button>
          )}

          {/* Sign In/Out */}
          <button
            className="bg-red-600 text-white font-bold rounded-md px-3 py-1 cursor-pointer hover:bg-red-500"
            onClick={handleClick}
          >
            {user?.type === "signin" ? lang.signOut : lang.signIn}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
