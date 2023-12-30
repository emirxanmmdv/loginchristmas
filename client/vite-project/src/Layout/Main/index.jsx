import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss"

const Main = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Main;
