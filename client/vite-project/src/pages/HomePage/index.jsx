import React from "react";
import "./index.scss";
import Navbar from "../../Layout/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className="HomePage">
        <h1 className="header">Salam. Xəbər saytımıza xoş gəlmişsiniz!</h1>
        <span className="subDesc">
          Ən son xəbərlərdən anında xəbərdar olmaq üçün səhifəmizdən
          qeydiyyatdan keçin.
        </span>
        <h3 className="Info">Hamınızdan zəhləm gedir</h3>
      </div>
    </>
  );
};

export default HomePage;
