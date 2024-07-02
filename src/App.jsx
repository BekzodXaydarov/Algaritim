import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/About/About_form/form";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Teacher from "./pages/about_teachers/Teachers";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";

const App = () => {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));
  const [modal, setModal] = useState(false);
  const [toastActive, setToastActive] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const handleToast = (text, type) => {
    setToastActive(!toastActive);
    setText(text);
    setType(type);
  };
  useEffect(() => {
    setTimeout(() => {
      setToastActive(false);
    }, 3000);
    localStorage.setItem("mode", mode);
  }, [toastActive, mode, setMode]);
  return (
    <div className="App" data-theme={`${mode ? "" : "dark"}`}>
      <Navbar
        mode={mode}
        setMode={setMode}
        toastify={toastActive}
        text={text}
        type={type}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              modal={modal}
              setModal={setModal}
              mode={mode}
              handleToast={handleToast}
            />
          }
        />
        <Route path="/:teacher" element={<Teacher mode={mode} />} />
        <Route path="/:category/:way" element={<VideoPlayer />} />
      </Routes>
      <Footer mode={mode} />
      <Modal
        modal={modal}
        Form={
          <Form modal={modal} setModal={setModal} handleToast={handleToast} />
        }
      />
    </div>
  );
};

export default App;
