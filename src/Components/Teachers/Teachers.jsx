import React, { useEffect, useState } from "react";
import "./Teachers.css";
import {  SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef } from "react";
import { Teachers } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import Swipper from "../mini_componts/Swipper/Swipper";

const Result = () => {
  const container = useRef();
  const [width, setWidth] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    setWidth(
      container?.current?.clientWidth < 500
        ? 1
        : container?.current?.clientWidth > 500 &&
          container?.current?.clientWidth < 900
        ? 2
        : 3
    );
  }, [container?.current?.clientWidth, width]);
  return (
    <div className="teachers" id="result">
      <h1 className="Title">O`qituvchilar</h1>
      <Swipper
        width={width}
        paganation={true}
        ref={container}
        body={Teachers.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <li>
                <div className="card">
                  <img className="card_header_img" src={item.Img} alt="" />
                  <div className="card_body">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="card_footer">
                    <p>
                      <img src={item.Img} alt="" className="card_avatar" />
                      {item.after}
                    </p>
                    <button
                      className="btn"
                      onClick={() => navigate(`/${item.after}`)}
                    >
                      O`qtuvchi haqida
                    </button>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          );
        })}
      />
    </div>
  );
};

export default Result;
