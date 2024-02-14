import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
