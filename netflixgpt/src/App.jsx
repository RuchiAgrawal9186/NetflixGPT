import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";

function App() {
  return (
    <Fragment>
      <div
        className="min-h-screen w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')`,
        }}
      >
        {/* Top dark fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

        {/* Bottom dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        {/* 🔹 Content (above overlay) */}
        <div className="relative z-10">
          <Header />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
