import React, { Fragment, useContext, useEffect, useState } from "react";
import { formValidation } from "../utils/formValidation";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { AuthContext } from "../utils/AuthUserContext";

const SignUpLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    error: {},
  });

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleClick = () => {
    let res = formValidation(
      formData?.name,
      formData?.email,
      formData?.password,
      isSignIn ? "signin" : "signup"
    );

    if (!res) {
      if (isSignIn) {
        signInWithEmailAndPassword(auth, formData?.email, formData?.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            if (user?.accessToken) {
              toast.success("Sign in successfully");
              const { uid, email, displayName, password } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  password: password,
                  type: "signin",
                })
              );
              navigate("/browse");
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(error.message);
          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          formData?.email,
          formData?.password
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            if (user?.accessToken) {
              toast.success("Sign up successfully");
              const { uid, email, displayName, password } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  password: password,
                  type: "signup",
                })
              );
              handleToggle();
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(error.message);
          });
      }
    } else {
      if (typeof res === "object" && Object.keys(res)?.length > 0) {
        setFormData((prev) => {
          return {
            ...prev,
            error: {
              ...prev.error,
              ...res,
            },
          };
        });
        return;
      }
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      error: {},
    });
  };
  const handleToggle = () => {
    setIsSignIn((prev) => !prev);
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/browse");
  //   }
  // }, [user, navigate]);

  return (
    <Fragment>
      <div
        className="min-h-screen w-full bg-cover bg-center relative flex justify-center items-center text-white"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Form Box */}
        <div className="relative z-10 bg-black/80 p-10 rounded-md w-96 mt-20">
          <h1 className="text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {!isSignIn && (
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded bg-gray-800 text-white focus:outline-none"
                  value={formData?.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {formData?.error?.nameError && (
                  <span className="text-sm text-red-500">
                    {formData?.error?.nameError}
                  </span>
                )}
              </div>
            )}

            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email or phone number"
                className="p-3 rounded bg-gray-800 text-white focus:outline-none"
                value={formData?.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {formData?.error?.emailError && (
                <span className="text-sm text-red-500">
                  {formData?.error?.emailError}
                </span>
              )}
            </div>

            <div className="w-full flex flex-col">
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded bg-gray-800 text-white focus:outline-none"
                value={formData?.password || ""}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              {formData?.error?.passwordError && (
                <span className="text-sm text-red-500">
                  {formData?.error?.passwordError}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-3 rounded hover:bg-red-500"
              onClick={handleClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            {/* Extra options */}
          </form>

          {/* Sign up / Sign in toggle */}
          <div className="text-gray-400 text-sm mt-6" onClick={handleToggle}>
            {isSignIn ? "New to NetflixGPT ?" : "Already have account ?"}{" "}
            <a href="#" className="text-white hover:underline">
              {isSignIn ? "Sign up now" : "Sign in now"}
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpLogin;
