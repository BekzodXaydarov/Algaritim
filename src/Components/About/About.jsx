import React from "react";
import "./About.css";
import Button from "../mini_componts/Button/button";
import { Model } from "../mini_componts/model/model";
import Logo from "../../assets/images/head_logo.png";
import { Canvas } from "@react-three/fiber";
import model from "../../assets/3d/logo.glb";
// import video from "../../assets/video/video1.MOV";
import { OrbitControls } from "@react-three/drei";

const About = ({ modal, setModal }) => {
  return (
    <>
      <div
        className={`about ${modal ? "opacity" : ""}`}
        data-theme="dark"
        id="about"
      >
        {/* <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="about_video"
        ></video> */}
        <h1 className="Title">
          <span>ALGORTIM TA`LIM</span>
          <br />
          zamonaviy kasblar kurslari
        </h1>
        <Button
          text={"BEPUL KONSULTATSIYA"}
          type={"btn"}
          OnFunction={() => setModal(true)}
        />
      </div>
      <div className="about_info">
        <div className="about_info_left">
          <h1>
            {" "}
          Algoritm Ta`lim
          </h1>
          <p>
            Bizning maqsadimiz – kuchli akademik salohiyatimizdan to'gri
            foydalangan holda, davlatimiz taraqqiyotida ahamiyatli bo'lgan
            ilmiy-texnologik yechimlarni yaratadigan va dunyo miqyosida nufuzli
            IT kompaniyalarda ishlab keta oladigan, malakali IT mutaxassislarni
            tayyorlash va yorqin shaxslarni shakllantirish Algoritm Ta'lim{" "}
            <br />
            <p>
              {" "}
              <span>Direktori</span>: Shavkatjon Usmanov
            </p>
          </p>
        </div>
        <div className="about_info_right">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={2.0} />
            <hemisphereLight args={["#fff", "#333", 2.0]} />
            <directionalLight position={[0, 5, 0]} intensity={2.0} />
            <pointLight position={[0,5,0]} intensity={2.0} />
            <spotLight position={[0,5,0]} />
            <Model Model={model} />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default About;
