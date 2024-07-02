import React from "react";
import Teachers from "../../Components/Teachers/Teachers";
import Course from "../../Components/Course/Course";
import Extra from "../../Components/Extra/Extra";
import About from "../../Components/About/About";
import "./Home.css"

const Home = ({ modal, setModal, handleToast }) => {
  return (
    <div className="home">
      <About modal={modal} setModal={setModal} />
      <div className={`App  ${modal ? "opacity" : ""}`}>
        <Course  />
        <Teachers />
        <Extra handleToast={handleToast} />
      </div>
    </div>
  );
};

export default Home;
