import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { removeUser } from "../store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
      console.log("come")
      navigate("/login");
    }
  };
  console.log(user,"user")
  return (
    <Fragment>
      <div className="absolute top-0 left-0 w-full h-15 flex justify-between items-center px-10 bg-gradient-to-b from-black/80 to-transparent z-10">
        <img src={logo} alt="logo" className="w-40 h-10" />

        <button
          className="bg-red-600 text-white font-bold rounded-md px-3 py-1 cursor-pointer hover:bg-red-500"
          onClick={handleClick}
        >
          {user?.type === "signin" ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </Fragment>
  );
};

export default Header;
