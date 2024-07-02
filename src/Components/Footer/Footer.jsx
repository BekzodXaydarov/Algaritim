import React from "react";
import LogoLight from "../../assets/images/1 2.png";
import LogoDark from "../../assets/images/1 2 (1).png";
import InstagramLight from "../../assets/svgs/instagram.svg?url";
import InstagramDark from "../../assets/svgs/instagram2.svg?url";
import YoutubeDark from "../../assets/svgs/youtube2.svg?url";
import YoutubeLight from "../../assets/svgs/youtube.svg?url";
import TelegramDark from "../../assets/svgs/Telegram2.svg?url";
import TelegramLight from "../../assets/svgs/Telegram.svg?url";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = ({ mode }) => {
  return (
    <div className="footer" data-theme={mode ? "" : "dark"}>
      <div className="footer-logo">
        <img src={mode ? LogoLight : LogoDark} alt="" className="Logo" />
        <div className="ul_list">
          <div>
            <Link to="about" smooth={true} offset={0} duration={500}>
              Biz haqimizda
            </Link>
            <Link to="video" smooth={true} offset={0} duration={500}>
              Kurslar
            </Link>
            <Link to="result" smooth={true} offset={0} duration={500}>
              O`qituvchilar
            </Link>
          </div>
          <div>
            <Link to="certificate" smooth={true} offset={0} duration={500}>
              Biz bilan bog`lanish
            </Link>
          </div>
          <div>
            <a href="https://t.me/algoritm_edu" target="_blank">
              Veb dasturchi
            </a>
            <a href="https://t.me/algoritm_edu" target="_blank">
              Inglistili
            </a>
            <a href="https://t.me/algoritm_edu" target="_blank">
              DTM
            </a>
          </div>
        </div>
        <div className="line"></div>
        <p>
          Barcha huquqlar himoyalangan. <br />© Algoritm 2024.
        </p>
        <div className="icons">
          <a href="https://t.me/algoritm_edu" target="_blank">
            <img src={mode ? TelegramDark : TelegramLight} alt="" />
          </a>
          <a href="https://www.instagram.com/algoritm_edu/" target="_blank">
            <img src={mode ? InstagramDark : InstagramLight} alt="" />
          </a>
          <a
            href="https://www.youtube.com/@algoritm_edu/featured"
            target="_blank"
          >
            <img src={mode ? YoutubeDark : YoutubeLight} alt="" />
          </a>
        </div>
      </div>
      <ul className="footer_list">
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            Biz haqimizda
          </Link>
        </li>
        <li>
          <Link to="video" smooth={true} offset={0} duration={500}>
            Kurslar
          </Link>
        </li>
        <li>
          <Link to="result" smooth={true} offset={0} duration={500}>
            O`qituvchilar
          </Link>
        </li>
        <li>
          <Link to="certificate" smooth={true} offset={0} duration={500}>
            Biz bilan bog`lanish
          </Link>
        </li>
        <li>
          <a href="https://t.me/algoritm_edu" target="_blank">
            Foydalanuvchi shartnomasi
          </a>
        </li>
      </ul>
      <ul className="footer_list">
        <li>
          <a href="https://t.me/algoritm_edu" target="_blank">
            Blog
          </a>
        </li>
        <li>
          <a href="https://t.me/algoritm_edu" target="_blank">
            Veb dasturchi
          </a>
        </li>
        <li>
          <a href="https://t.me/algoritm_edu" target="_blank">
            Ingliz tili
          </a>
        </li>
        <li>
          <a href="https://t.me/algoritm_edu" target="_blank">
            Rus tili
          </a>
        </li>
        <li>
          <a href="https://t.me/algoritm_edu" target="_blank">
            DTM
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
