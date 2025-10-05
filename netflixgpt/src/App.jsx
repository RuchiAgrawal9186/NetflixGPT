import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Fragment>
      <div className="min-h-screen w-full bg-cover bg-center relative">
        <div className="relative z-10">
          <Toaster position="top-center" />
          <Header />
          <main className="w-full overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
