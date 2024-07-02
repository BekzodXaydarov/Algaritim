import React, { useState } from "react";
import "./form.css";
import { ErrorState, YOUR_BOT_TOKEN, YOUR_CHAT_ID } from "../../../utils/data";
import { PatternFormat } from "react-number-format";
const Form = ({ modal, setModal, handleToast }) => {
  const [ism, setIsm] = useState("");
  const [tel, setTel] = useState("");
  const [telegram, setTelegram] = useState("");
  const [error, setError] = useState(false);
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (
      ism === "" ||
      tel === "" ||
      telegram === "" ||
      tel.replace("_", "").length !== 17
    ) {
      setError(true);
    } else {
      try {
        const responsePhoto = await fetch(
          `https://api.telegram.org/bot${YOUR_BOT_TOKEN}/sendMessage?chat_id=${YOUR_CHAT_ID}&text=${encodeURI(
            `Yangi xabar:\n\nIsm: ${ism}\n\nTelefon: ${tel}\n\nTelegram name: ${telegram}`
          )}`,
          {
            method: "POST",
          }
        );
        setIsm("");
        setTel("");
        setTelegram("");
        handleToast("Xabar keti", "success");
        setModal(!modal);
        setError(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        handleToast("Xabar ketmadi", "error");
      }
    }
  };
  return (
    <div className={`Modal`}>
      <button
        className="cross"
        onClick={() => {
          setModal(false);
          setError(false);
        }}
      >
        &#10539;
      </button>
      <h1>Bepul konsultatsiya</h1>
      <h4>
        So‘rovnomani to‘ldiring va bizning menejerlarimiz tez orada siz bilan
        bog‘lanishadi.
      </h4>
      <h4>Biz dam olish kunlarisiz 9:00 dan 21:00 gacha ishlaymiz</h4>
      <form onSubmit={handleSumbit}>
        {ErrorState(
          error,
          ism,
          <label htmlFor="name" style={{ color: "red", fontSize: "17px" }}>
            Ismingizni kiritmadingiz
          </label>,
          null
        )}
        <br />
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
          className={ErrorState(error, ism, "error", null)}
        />

        <br />
        {ErrorState(
          error,
          tel,
          <label htmlFor="name" style={{ color: "red", fontSize: "17px" }}>
            Telefoningizni Kiritmadingiz
          </label>,
          null
        )}
        <PatternFormat
          format="+998 ## ### ## ##"
          allowEmptyFormatting
          mask="_"
          style={{ color: "#757575" }}
          name="phone"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          className={
            error
              ? tel === "" || tel.replace("_", "").length !== 17
                ? "error"
                : null
              : null
          }
        />
        <br />
        {ErrorState(
          error,
          tel,
          <label htmlFor="name">Telegram usernameni kiritmadingiz</label>,
          null
        )}

        <input
          type="text"
          placeholder="Telegram @username"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          className={ErrorState(error, telegram, "error", null)}
        />
        <br />
        <button type="sumbit">Jo`natish</button>
      </form>
      <span>
        * Arizani yuborishdan oldin, to'g'ri ma'lumot kiritganingizga ishonch
        hosil qiling
      </span>
      <span>
        “Yuborish” tugmasini bosish orqali siz <a href="#">ommaviy oferta</a>{" "}
        shartlariga rozilik bildirasiz.
      </span>
    </div>
  );
};

export default Form;
