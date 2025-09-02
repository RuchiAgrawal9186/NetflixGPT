import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="absolute top-0 left-0 w-full h-15 flex justify-between items-center px-10 bg-gradient-to-b from-black/80 to-transparent z-10">
        <img src={logo} alt="logo" className="w-40 h-10" />
        <Link to="/login">
          <button className="bg-red-600 text-white font-bold rounded-md px-3 py-1 cursor-pointer hover:bg-red-500">
            Sign In
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
