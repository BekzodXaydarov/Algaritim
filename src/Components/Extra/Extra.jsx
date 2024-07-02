import React, { useState } from "react";
import Button from "../mini_componts/Button/button";
import "./Extra.css";
import { ErrorState, YOUR_BOT_TOKEN, YOUR_CHAT_ID } from "../../utils/data";
import { PatternFormat } from "react-number-format";

const Extra = ({ handleToast }) => {
  const [ism, setIsm] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (ism === "" || tel === "" || tel.replace("_", "").length !== 17) {
      setError(true);
    } else {
      try {
        const responsePhoto = await fetch(
          `https://api.telegram.org/bot${YOUR_BOT_TOKEN}/sendMessage?chat_id=${YOUR_CHAT_ID}&text=${encodeURI(
            `Yangi xabar:\n\nIsm: ${ism}\n\nTelefon: ${tel}`
          )}`,
          {
            method: "POST",
          }
        );
        const responseDataPhoto = await responsePhoto.json();
        console.log("Message Response:", responseDataPhoto);
        setIsm("");
        setTel("");
        handleToast("Xabar keti", "success");
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        handleToast("Xabar ketmadi", "error");
      }
      setError(false);
    }
  }
  return (
    <div className="Extra container" id="certificate">
      <h1 className="Title">Biz bilan bog`lanish</h1>
      <div className="extra_contact">
        <form className="contact_col" onSubmit={handleSubmit}>
          <div>
            {ErrorState(
              error,
              ism,
              <label htmlFor="name" style={{ color: "red", fontSize: "19px" }}>
                Ismingizni Kiritmadingiz
              </label>,
              <label htmlFor="name">Sizning ismingiz</label>
            )}
            <br />
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={ism}
              onChange={(e) => setIsm(e.target.value)}
              className={`${ErrorState(error, ism, "error_input")} input`}
            />
          </div>
          <div>
            {/* {ErrorState(
              error,
              tel,
              <label htmlFor="phone" style={{ color: "red" }}>
                Telefonigizni Kiritmadingiz
              </label>,
              <label htmlFor="phone">Telefoning nomeri</label>
            )} */}
            {error ? (
              tel === "" || tel.replace("_", "").length !== 17 ? (
                <label
                  htmlFor="phone"
                  style={{ color: "red", fontSize: "19px" }}
                >
                  Telefonigizni Kiritmadingiz
                </label>
              ) : null
            ) : (
              <label htmlFor="phone">Telefoning nomeri</label>
            )}

            <br />

            <PatternFormat
              format="+998 ## ### ## ##"
              allowEmptyFormatting
              mask="_"
              name="phone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className={` ${
                error
                  ? tel === "" || tel.replace("_", "").length !== 17
                    ? "error_input"
                    : "input"
                  : "input"
              } input`}
            />
          </div>
          <Button text={"Jo`natish"} type={"sumbit"} />
          <div className="form_footer">
            <p>Har kuni</p>
            <span>07:30 21:00</span>
          </div>
        </form>
        <div className="contact_col right">
          <div className="col">
            <h3>Dars yozuvini bir nechta odam ishlatishi mumkinmi?</h3>
            <span>
              Yo'q, yozuv bir kishi uchun mo'ljallangan. Tarqatish taqiqlangan.
            </span>
          </div>
          <div className="col">
            <h3>Bo'lib-bo'lib to'lash mumkinmi?</h3>
            <span>
              Mumkin, lekin administrator tomonidan belgilanishi shart.
            </span>
          </div>
          <div className="col">
            <h3>Qachon ish topishim mumkin?</h3>
            <span>
              Siz hatto o'qish davomida ham ish topishingiz mumkin. Muhimi, ish
              o'qishingizga xalal bermasligi kerak.
            </span>
          </div>
          <div className="col">
            <h3>Agar imtihondan o'tmasam nima bo'ladi?</h3>
            <span>
              O'qituvchingiz qayta topshirish sanasini belgilaydi. Agar ushbu
              imtihondan ham o'ta olmasangiz, keyingi to'lovgacha o'qish
              to'xtatiladi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
