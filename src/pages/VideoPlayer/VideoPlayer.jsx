import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorState, kurslar } from "../../utils/data";
const VideoPlayer = () => {
  // const [message, setMessage] = useState("");
  // const [arrow, setArrow] = useState(false);
  const params = useParams();
  const data = kurslar.filter(
    (f) => f.category.includes(params.category) && f.title.includes(params.way)
  )[0];
  const navigate = useNavigate("");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);
  return (
    <div className="VideoPlayer">
      <div className="videoplayer_left">
        <div>
          <iframe
            src={data?.video_link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="videoplayer_video"
          ></iframe>
          <h2>{data.title}</h2>
          <div className="videoplayer_footer">
          </div>
        </div>
      </div>
      <div className={"recommend"}>
        <div className="recommend_wraper">
          {kurslar.map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{ display: data === item ? "none" : "block" }}
                onClick={() =>
                  navigate(`/${item.category}/${item.title.split(" ")[0]}`)
                }
              >
                <div className="card_header">
                  <img src={item.Img} alt="" />
                  <h2>{item.title}</h2>
                </div>
                <div className="card_body">
                  <p>
                    <img src={item.Avatar} alt="" /> {item.after}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="recommend_wraper">
          {kurslar.map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{ display: data === item ? "none" : "block" }}
                onClick={() =>
                  navigate(`/${item.category}/${item.title.split(" ")[0]}`)
                }
              >
                <div className="card_header">
                  <img src={item.Img} alt="" />
                  <h2>{item.title}</h2>
                </div>
                <div className="card_body">
                  <p>
                    <img src={item.Avatar} alt="" /> {item.after}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"recommend"}>
        <div className="recommend_wraper_second">
          {kurslar.map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{ display: data === item ? "none" : "block" }}
                onClick={() =>
                  navigate(`/${item.category}/${item.title.split(" ")[0]}`)
                }
              >
                <div className="card_header">
                  <img src={item.Img} alt="" />
                  <h2>{item.title}</h2>
                </div>
                <div className="card_body">
                  <p>
                    <img src={item.Avatar} alt="" /> {item.after}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="recommend_wraper_second">
          {kurslar.map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{ display: data === item ? "none" : "block" }}
                onClick={() =>
                  navigate(`/${item.category}/${item.title.split(" ")[0]}`)
                }
              >
                <div className="card_header">
                  <img src={item.Img} alt="" />
                  <h2>{item.title}</h2>
                </div>
                <div className="card_body">
                  <p>
                    <img src={item.Avatar} alt="" /> {item.after}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

{
  /* <div className={`comments ${arrow ? "comments_head_active" : ""}`}>
          <div className="comments_head">
            <h1>Comments</h1>
            <button onClick={() => setArrow(!arrow)}>
              {arrow ? <BiArrowToTop /> : <BiArrowToBottom />}
            </button>
          </div>
          <form onSubmit={handleSumbit}>
            {ErrorState(
              error,
              message,
              <p style={{ color: "red" }}>Comment kiritmadingiz</p>,
              null
            )}
            <input
              name="name"
              id="id"
              placeholder="Commentingizni kirting"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></input>
          </form>
          <div className="comments_warp">
            {data.comments.length === 0
              ? null
              : data.comments.map((item, index) => {
                  return (
                    <>
                      <div className="comment" key={index}>
                        {item.message}
                      </div>
                    </>
                  );
                })}
          </div>
        </div> */
}
{
  /* <video
            onClick={handePlay}
            autoPlay
          ></video> */
}
