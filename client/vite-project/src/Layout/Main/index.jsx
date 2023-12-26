import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "./index.scss"

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
