import React, { useEffect, useRef, useState } from "react";
import "./Course.css";
import { kurslar } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import Swipper from "../mini_componts/Swipper/Swipper";
import { SwiperSlide } from "swiper/react";

const Video = () => {
  const container = useRef();
  const [width, setWidth] = useState(3);
  const navigate = useNavigate("");
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
    <div className="course" id="video">
      <h1 className="Title">Kurslarimiz</h1>
      <Swipper
        ref={container}
        width={width}
        paganation={true}
        body={kurslar.map((x, index) => {
          return (
            <SwiperSlide>
              <li
                onClick={() =>
                  navigate(`/${x.category}/${x.title.split(" ")[0]}`)
                }
              >
                <div className="card" key={index}>
                  <img src={x.Img} alt="" className="card_header_img" />
                  <h3>{x.title}</h3>
                  <div className="card_footer">
                    <img src={x.Avatar} alt="" />
                    <p>
                      {x.after} <br /> <span>{x.It}</span>
                    </p>
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

export default Video;
