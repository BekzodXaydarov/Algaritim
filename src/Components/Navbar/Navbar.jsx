import React, { useState } from "react";
import LogoDark from "../../assets/images/Logo dark.png";
import LogoLight from "../../assets/images/logoLight.png";
import Sun from "../../assets/svgs/sun.svg?url";
import Moon from "../../assets/svgs/moon.svg?url";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ mode, setMode, toastify, text, type }) => {
  const [active, setActive] = useState(false);
  const ToggleActive = (e) => {
    navigate("/");
    setActive(false);
  };
  const handleMode = () => {
    setMode(!mode);
  };
  const navigate = useNavigate("");
  return (
    <>
      <nav data-theme={mode ? "" : "dark"}>
        <Link
          onClick={() => navigate("/")}
          to="about"
          smooth={true}
          offset={0}
          duration={500}
        >
          <img className="nav_logo" src={mode ? LogoLight : LogoDark} alt="" />
        </Link>
        <ul className={`${active ? "nav_middle" : ""}`}>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={0}
              duration={500}
              onClick={ToggleActive}
            >
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link
              to="video"
              smooth={true}
              offset={0}
              duration={500}
              onClick={ToggleActive}
            >
              Kurslar
            </Link>
          </li>
          <li>
            <Link
              to="result"
              smooth={true}
              offset={0}
              duration={500}
              onClick={ToggleActive}
            >
              O`qituvchilar
            </Link>
          </li>
          <li>
            <Link
              to="certificate"
              smooth={true}
              offset={0}
              duration={500}
              onClick={ToggleActive}
            >
              Biz bilan bog`lanish
            </Link>
          </li>
          <li>
            <button className="mode_btn" onClick={handleMode}>
              <img src={mode ? Moon : Sun} alt="" />
            </button>
          </li>
        </ul>
        <div className="nav_right">
          <button className="mode_btn" onClick={() => setMode(!mode)}>
            <img src={mode ? Moon : Sun} alt="" />
          </button>
          <div
            className={`nav_toggle ${active ? "toggle" : ""}`}
            onClick={() => setActive(!active)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
      <div className={`taostify ${toastify ? "active_taostify" : ""} ${type}`}>
        {text}
      </div>
    </>
  );
};

export default Navbar;
