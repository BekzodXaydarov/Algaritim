import React, { useEffect } from "react";
import "./Teachers.css";
import { useLocation, useParams } from "react-router-dom";
import { Teachers } from "../../utils/data";
import TelegramLight from "../../assets/svgs/Telegram.svg?url";
import TelegramDark from "../../assets/svgs/Telegram2.svg?url";

const Teacher = ({ mode }) => {
  const { teacher } = useParams();
  const data = Teachers.filter(
    (f) => f.after.toLocaleLowerCase() === teacher.toLocaleLowerCase()
  )[0];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [teacher]);
  
  return (
    <div className="Teacher">
      <div className="teacher-left">
        <img src={data.Img} alt="" />
        <h2>{data.after}</h2>
        <h3>{data.title}</h3>
      </div>
      <div className="teacher-right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          repellat quibusdam ea quaerat itaque recusandae, nesciunt officia amet
          hic distinctio voluptas! Ullam, alias est? Neque debitis quibusdam
          atque itaque vitae eius dicta eaque minima placeat necessitatibus,
          doloribus repellendus ipsa molestias accusantium? Suscipit dolores
          consequatur at magnam esse alias ducimus quo repellat excepturi!
          Commodi dolores similique animi optio incidunt perspiciatis voluptates
          culpa esse dolore, voluptas a suscipit dolor delectus nesciunt illo
          natus placeat quasi error sapiente assumenda tempore minima molestias
          architecto! Ab recusandae exercitationem obcaecati repellat magnam
          doloribus neque expedita, debitis explicabo unde nihil ut modi
          distinctio voluptatem error vero similique.
        </p>
        <ul style={{ display: data?.links ? "block" : "none" }}>
          <li style={{ display: data?.phone_number ? "block" : "none" }}>
            <img src={mode ? TelegramDark : TelegramLight} alt="" /> Phone
            number:<a href={data?.phone_number}>{data?.phone_number}</a>
          </li>
          <li
            style={{ display: data?.links?.telegram?.link ? "block" : "none" }}
          >
            <img src={mode ? TelegramDark : TelegramLight} alt="" /> Telegram:
            <a href={data?.links?.telegram?.link}>
              {data?.links?.telegram?.name}
            </a>
          </li>
          <li style={{ display: data?.links?.github.link ? "block" : "none" }}>
            <img src={mode ? TelegramDark : TelegramLight} alt="" />
            GitHub:
            <a href={data?.links?.github?.link}>{data?.links?.github?.name}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teacher;
